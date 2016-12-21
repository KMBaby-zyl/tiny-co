var clone = function(){
    var newObj = (this instanceof Array) ? [] : {};
    for(var i in this){
        if(this[i] typeof Object){
            newObj[i] = clone(this[i];
        }else{
            newObj[i] = this[i];
        }
    }

    return newObj;
}
