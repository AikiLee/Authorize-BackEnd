// /src/config/authRoutes.ts
import 'dotenv/config';
import { Sequelize } from "sequelize";

const database = process.env.DB_NAME!;
const username = process.env.DB_USER!;
const password = process.env.DB_PASSWORD!;
const host = process.env.DB_HOST;

console.log(database, username, password, host);
/* 
    通过.env获取变量设置
    process可以直接使用
    如果你的 node 项目中有多个环境变量，你也可以在你的项目根目录下创建一个 .env 文件，然后在运行时使用 dotenv 包加载它们。
    */

const sequelize = new Sequelize(
    database, 
    username, 
    password, 
    {
        host,
        dialect: "mysql",
        // 添加调试日志用于验证配置
        logging: console.log,
});

export default sequelize;
