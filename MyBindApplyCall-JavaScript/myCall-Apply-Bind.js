function myBind(context, ...bindArgs) {
    return (...callArgs) => {
        const uniqKey = Date.now()
        if (bindArgs) {
            return {...context, [uniqKey]: this}[uniqKey](...bindArgs, ...callArgs)
        }
        return {...context, [uniqKey]: this}[uniqKey](...callArgs)
    }
}

function myCall(context, ...bindArgs) {
    const uniqKey = Date.now()
    if (bindArgs) {
        return {...context, [uniqKey]: this}[uniqKey](...bindArgs)
    }
    return {...context, [uniqKey]: this}[uniqKey]()
}

function myApply(context, bindArgs) {
    const uniqKey = Date.now()
    if (bindArgs) {
        return {...context, [uniqKey]: this}[uniqKey](...bindArgs)
    }
    return {...context, [uniqKey]: this}[uniqKey]()
}

Function.prototype.myBind = myBind
Function.prototype.myCall = myCall
Function.prototype.myApply = myApply