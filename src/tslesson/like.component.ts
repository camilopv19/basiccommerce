export class LikeComponent{
    constructor(private _likesCount?: number, private _isSelected?: boolean){
    }

    onClick(){
        this._likesCount += this._isSelected ? -1 : 1; //Summarize the "if" for ++ or --
        this._isSelected = !this._isSelected; //Summarize lines 8 and 11
    }

    get likesCount(){
        return this._likesCount;
    }
    get isSelected(){
        return this._isSelected;
    }
}