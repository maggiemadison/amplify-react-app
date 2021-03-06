export type AmplifyDependentResourcesAttributes = {
    "function": {
        "cryptofunction": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "createatfunction": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "cryptoapi": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "bornapi": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}