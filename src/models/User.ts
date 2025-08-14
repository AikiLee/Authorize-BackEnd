import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';
import Role from './Role';

// 定义 User 模型数据类型
interface UserAttributes {
  id: number;
  username: string;
  email?: string;
  phone?: string;
  avatar?: string;
  password: string;
  role_id: number;
  createdAt?: Date;
  updatedAt?: Date;
}
// 定义 UserPayload 类型
export interface UserPayload {
  userId: number;
  role_id: number;
}

// 标记为Optional的字段可以省略不传
interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'phone' | 'avatar' | 'createdAt' | 'updatedAt'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public email!: string;
  public phone?: string;
  public avatar?: string;
  public password!: string;
  public role_id!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // 关联方法
  public readonly role?: Role;
}
//  Sequelize 为通过 Model.init 定义的每个属性添加一个 getter 和一个 setter
/* 如果想临时添加字段，可以通过在class User 

    class User extends Model {
    declare id: number; // 您可以使用 `declare` 关键字添加键入信息, 而无需添加实际的公共类字段.
    }

*/ 
User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    phone: {
      type: new DataTypes.STRING(20),
      allowNull: true,
    },
    avatar: {
      type: new DataTypes.STRING(255),
      allowNull: true,
    },
    password: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Roles',
        key: 'id',
      },
    },
  },
  {
    // 提供指向的表名
    tableName: 'users',
    sequelize, // passing the `sequelize` instance is required
    timestamps: true,
  }
);

export default User;
