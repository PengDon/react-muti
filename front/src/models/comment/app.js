import React, { Component } from 'react';

class App extends Component{
    render(){
        return(
            <section>
                <a href="#/comment/id/">comment</a>
                <div>
                <dl>
                    <dt>用户名：</dt>
                    <dd><input /></dd>
                </dl> 
                <dl>
                    <dt>评论内容：</dt>
                    <dd><textarea></textarea></dd>
                </dl>   
                <button>提交</button>
                </div>
                <div className="commentList">
                    <dl>
                        <dt>xxx：</dt>
                        <dd>hello world</dd>
                    </dl>
                </div>
            </section>

        )
        
    }

}

class Detail extends Component{
    render(){
        return(
            <section>
                Detail
                <a href="#/comment/">comment</a>
            </section>

        )
        
    }

}

export {App,Detail};
