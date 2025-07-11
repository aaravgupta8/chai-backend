class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400 //server ke statusCode hote hai, yaha pe 400 kyuki error ki baat ni hori response.js hai yeh
        
    }
}