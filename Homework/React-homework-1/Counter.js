import React,{Component,useEffect} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            number:0,
            post:[],
            name:'',
            date:''
        }
    }

    componentWillMount() {
        fetch('https://my-json-server.typicode.com/smashh712/json_placeholder/members/')
            .then(res => res.json())
            .then(data => this.setState({
                posts: data
            }));
    }

    render(){
        const { posts } = this.state;
        const { name } = this.state;
        const{number}=this.state;
        const{date}=this.state;
        var dat=''
        return(
            <div>
                            <input
          placeholder="번호"
          type="text"
          onChange={(e)=>{this.state=e.target.value
        }

    }
          />
          번호를 입력하시오.

                <button
                
                onClick={()=>{

                    const number=this.state      
                    dat=posts[number]
                    console.log(dat['name'])
                    this.setState({name:dat['name']});
                    this.setState({date:dat['birth']});
                    
                }}
            >
                입력완료
            </button>
            <h1>{name}의 생일은 {date[0]}{date[1]}년 {date[2]}{date[3]}월 {date[4]}{date[5]}일 입니다.</h1>
        </div>
        );
    }
}

export default Counter;