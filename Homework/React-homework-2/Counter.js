import React,{Component,useEffect} from 'react';
import './memo'
import Memo from './memo';



class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            number:0,
            post:[],
            name:'',
            date:'',
            issues:[],
            color:'',
            checkedpink:false,
            checkedgray:false,
            memoNumber:0,
            memoS:'',
            memoT:'',
            memoList:[]


        }

        this.handleClick=this.handleClick.bind(this);
        this.updateMemo=this.updateMemo.bind(this);
        this.memoSentence=this.memoSentence.bind(this);
        this.deleteMemo=this.deleteMemo.bind(this);
    }

    



    componentWillMount() {


    }

    render(){
        const textStyle={
            pink:this.state.checkedpink?true:false,
            gray:this.state.checkedgray?true:false
        }
        const Tmemo={
            memoS:this.state.memoS,
            memoT:this.state.memoT,
            memoC:this.state.color
        }
        const { posts } = this.state;
        const { name } = this.state;
        const{number}=this.state;
        const{date}=this.state;
        var dat=''
        const{issues}=this.state;
        const{color}=this.state;
        const{memoNumber}=this.state;
        const{memoList}=this.state;

        console.log(memoList)
        console.log(this.state.memoList)

        return(
            
            <div>
            <input type='checkbox' value='pink' onClick={this.handleClick}/>핑크
            <input type='checkbox' value='gray' onClick={this.handleClick}/>그레이
            <div>
            <input placeholder='내용을 작성해보시오.' onChange={this.memoSentence}/>
            <button onClick={this.updateMemo}>제출</ button>
            
            </div>
            <div>
            {memoList&&memoList.map(memo=><Memo key={memo.S} name={memo.C} time={memo.T} sentence={memo.S} deleteFuction={this.deleteMemo}></Memo>)}
            </div>
        </div>
        );
    }


    updateMemo(){
        this.setState({
            memoList:this.state.memoList.concat({S:this.state.memoS,C:this.state.color,T:this.state.memoT}),
            memoNumber:this.state.memoNumber+1,
            memoS:''
        })

    }

    deleteMemo(data){
        this.setState({
            memoList:this.state.memoList.filter(memo=>memo.S!==data),
            memoNumber:this.state.memoNumber-1,
            memoS:''
        })
        console.log(data)
    }

    memoSentence(event){
        this.setState({
            memoT:Date(),
            memoS:event.target.value
        })
        console.log(this.state.memoS)
    }

    handleClick (event) {
        if(this.state.checkedpink)
        {
            this.setState({
            checkedpink:false
        })
    }
    else{
        this.setState({
            color:event.target.value,
            checkedpink:true
        })
    }
    console.log(this.state.color);
    console.log(this.state.checkedpink);

    }
}

export default Counter;