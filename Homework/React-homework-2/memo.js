import React,{Component,useEffect} from 'react';


class Memo extends Component{
    constructor(props){
        super(props);
        this.state={
            name:String(props.name),
            sentence:String(props.sentence),
            time:String(props.time),
            color:'',
            deleteFuction:props.deleteFuction
        }

        this.sendData=this.sendData.bind(this);
    }

    sendData(){
        this.state.deleteFuction(this.state.sentence)
    }

    render(props){
        const style={
            'backgroundColor':this.state.name
        }
        return(
            <div style={style}>
                <h2>
                    {this.state.time}
                    <div>
                        <h1>
                            {this.state.sentence}
                        </h1>
                        <button onClick={this.sendData}>
                            삭제
                        </button>
                    </div>
                </h2>
        </div>
        );
    }

}

export default Memo;