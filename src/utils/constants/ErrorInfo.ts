export enum ErrorCode {
	USER_NOT_FOUND = 1001,
	INVALID_CREDENTIALS = 1002,
	UNAUTHORIZED = 1003,
	SERVER_ERROR = 1004,
	DATABASE_ERROR = 1005,
	VALIDATION_ERROR = 1006,
	OTHER_ERROR = 1008,
	// 可以根据需求增加其他错误码
}

export enum ErrorMessage {
	USER_NOT_FOUND = "用户不存在",
	INVALID_CREDENTIALS = "身份不可用",
	UNAUTHORIZED = "未授权",
	SERVER_ERROR = "服务器内部错误",
	DATABASE_ERROR = "数据库错误",
	VALIDATION_ERROR = "验证失败",
	OTHER_ERROR = "其他未知错误",
	// 可以根据需求增加其他错误信息
}
