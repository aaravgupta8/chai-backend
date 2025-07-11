const asyncHandler = (requestHandler) => {      //have written same promise code in try/catch below as well
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}

export {asyncHandler}



// const asyncHandler = () => {} HIGHER ORDER FUNCTION (function ko function mei pass kardiya)
// const asyncHandler = (fn) => () => {}
// const asyncHandler = (fn) => async () => {}


// const asyncHandler = (fn) => async (req,res,next) => {
//     try {
//         await fn(req,req,next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// } 
