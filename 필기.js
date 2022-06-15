const { contentType } = require("express/lib/response")

# Introduction 

리액트를 배우기전에 리액트가 무엇을 해결해주는지부터 알아보자. 
리액트는 UI를 Interactive하게 만들어준다. 
-> 리액트는 나의 웹사이트에 interactivity를 만들어준다. 그걸 위해 리액트가 태어났다. 

간단한 웹앱을 JS와 리액트를 이용하여 만들어보고 왜 리액트를 사용해야하는지 알아보자. 

# Before React 

버튼을 클릭할 때 마다 횟수가 카운팅되어 몇번클릭했는지 알려주는 간단한 어플리케이션을 만들어 볼 것 이다. 

*******************************************************************************************************************
<!DOCTYPE html>
<html lang="en">
<body>
    <button id="btn">Click me</button>    
</body>
<script>
    const button = document.getElementById("btn");
    function handleClick(event) {
        console.log("I have been Clicked");
    }
    button.addEventListener("click", handleClick)
</script>
</html>
*******************************************************************************************************************

1. HTML로 버튼 만들기 
2. Javascript 에서 버튼 가져오기. 
3. addEventListener로 클릭 감지하기 

현재 위의 코드로 상기의 세번째 단계 까지 완성하였다. 

그 다음의 난관은 클릭의 갯수를 세어야 한다는 것 이다. 

*******************************************************************************************************************
<!DOCTYPE html>
<html lang="en">
<body>
    <span>Total Click: 0</span>
    <button id="btn">Click me</button>    
</body>
<script>
    const button = document.getElementById("btn");
    function handleClick(event) {
        console.log("I have been Clicked");
    }
    button.addEventListener("click", handleClick)
</script>
</html>
*******************************************************************************************************************

그러기 위해 위처럼 Total Click 이라고 span을 만들어 놓고 
카운터를 하나 만들어서 이 0 이라는 숫자를 증가시킬것이다. 

아래처럼 카운터를 만든 뒤 클릭하여 counter의 값이 증가할 때 마다 
span안의 text를 coutner의 값으로 두면 된다. 
*******************************************************************************************************************
<!DOCTYPE html>
<html lang="en">
<body>
    <span>Total Click: 0</span>
    <button id="btn">Click me</button>    
</body>
<script>
    let counter = 0;
    const button = document.getElementById("btn");
    const span = document.querySelector("span");
    function handleClick(event) {
        counter = counter + 1
        span.innerText = `Total Click: ${counter}`
    }
    button.addEventListener("click", handleClick)
</script>
</html>
*******************************************************************************************************************

자 위처럼 우리가 의도한 대로 버튼을 클릭한 수를 카운트해주는 간단한 어플리케이션을 만들었으나 
이 코드의 양을 보라 아주 길다. 

1. HTML을 만든다. 
2. Javascript 에서 가져온다. 
3. event를 감지하고 
4. 데이터를 업데이트 한다. 
5. HTML을 업데이트 한다. 

지금은 이렇게 간단한 기능을 구현한것이니 별것아닌것처럼 느낄 수 있지만 
이러한 핸들러가 손나 많아지게 된다면 아주 번거로울 것 이다. 

이것을 아주 간단하게 해주도록 리액트로 구현해보고 Vanila Javascript와 비교해보자. 



# Our First React Element 

*******************************************************************************************************************
<!DOCTYPE html>
<html lang="en">
<body>
    <span>Total Click: 0</span>
    <button id="btn">Click me</button>    
</body>
<script>
    let counter = 0;
    const button = document.getElementById("btn");
    const span = document.querySelector("span");
    function handleClick(event) {
        counter = counter + 1
        span.innerText = `Total Click: ${counter}`
    }
    button.addEventListener("click", handleClick)
</script>
</html>
*******************************************************************************************************************

현재 목표는 위의 코드를 React JS로 다시 구현하는것이다. 

React JS의 규칙 중 하나는 HTML을 이 페이지에 직접 작성하지 않는다는 것이다. 
HTML 코드를 직접 작성하지 않고 JS와 ReactJS 코드를 사용하여 span이든 뭐든간에 만드는거다. 

두가지 방법을 이용해서 구현해볼것이고 
첫번쨰는 복잡하고 실제 개발자들이 잘 사용하지 않는 방법이지만 ReactJS의 본질을 알기위한 방법,
두번째는 실제 개발자들이 사용하는 비교적 쉬운 방법이다. 

1. 근본 

*******************************************************************************************************************
<!DOCTYPE html>
<html lang="en">
<body></body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>           <- React JS Import
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>   <- React DOM Import
<script></script>
</html>
*******************************************************************************************************************

일단 위의 흰 도화기같은 코드에서 클릭을 감지하기 위해 span을 하나 만들어 줄건데
const span = React.createElement("span") 를 통해 생성할 수 있다. 
(위에서 리액트를 import 했기 때문에 createElement function을 가진 React object에 접근할 수 있다.

React.createElement("span")의 span은 실제 HTML 의 태그이름과 똑같아야하지만, 
그걸 받는 변수인 const span 은 굳이 이름이 HTML 태그와 같을 필요는 없다. 
짠 이렇게하면 태그를 하나 생성한것이다. 

이젠 이 만들어준 span을 페이지에 두어야겠지?
HTML에는 아직 없지만 span은 존재한다.
콘솔창에서 span이라는 변수를 출력해보면 뭔말인진 아직 모르곘지만 아무튼 있는걸 볼 수 있다. 

*******************************************************************************************************************
(콘솔창에 span 출력)
span
{$$typeof: Symbol(react.element), type: 'span', key: null, ref: null, props: {…}, …}
*******************************************************************************************************************

자 그렇다면 이제 이 만들어준 React Element 인 span을 어떻게 body안에 가져다 둘 수 있는지 알아보자. 
그것을 하기 위해서 react-dom 을 사용해야 한다. 

React JS는 어플리케이션이 아주 interactve 하도록 만들어주는 library 이고 
react-dom은 library, 또는 package 인데 
모든 React element들을 HTML body에 둘 수 있도록 해준다. 
이 둘은 다른것이다. 

React JS는 엔진과 같다. interactve한 UI를 만들 수 있게 하기 때문이다. 
react-dom은 React element를 HTML에 두는 역할을 하는것이다. 

현재는 어려운 방식으로 하고있기 때문에 이렇게 나누어서 하는것이고 
나중에 실제 어플리케이션을 만들 때에는 이 모든것이 포함된 React JS 프로젝트를 생성할 것 이다. 

ReactDOM.render() 를 통해 HTML에 두는것을 구현할 수 있는데 
여기서 render의 의미는 만들어준 React element를 가지고 HTML로 만들어 배치한다는 의미이다. 
즉, 간단하게 말하면 "만들어준 React element를 사용자에게 보여준다." 이다. 

ReactDOM.render(span, 위치) 를 통해 무엇을 어디에 둘지 지정해줄 수 있다. 
일단 무엇을 둘지는 만들어준 변수명을 통해서 정할 수 있는데 
위치는 HTML안에 div를 만들어서 그 div의 id를 통해서 지정해줄 수 있다. 

지금까지의 과정을 코드로 표현하면 아래와 같다. 

*************************************************************************************************************************************
<!DOCTYPE html>
<html lang="en">
<body>
    <div id="root"></div>                                                                   <- 1. React element를 위치시키기 위한 root div 
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>          <- React JS Import
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>  <- React-dom Import
<script>
    const root = document.getElementById("root");                                           <- 2. 위치시키기 위한 div 가져오고
    const span = React.createElement("span");                                               <- 3. span React element 생성하고 
    ReactDOM.render(span, root);                                                            <- 4. 그것을 body안의 root에 배치시킨다, 
</script>
</html>
*************************************************************************************************************************************

짠 이렇게 React JS를 통해 span을 만들어서 HTML 안에 배치시켜보았다. 
하지만 아직 span안에는 암것도 없이 비어있다. 

createElement 에는 우리가 더 작성할 수 있는 argument 가 있다. 
예를들어 두번째 argument 로 둘 수 있는것은 span의 property 들 이다. 

무엇이 span의 property가 될 수 있나면 class_name, id 같은것들 이다. 
(span에 두고싶은 무엇이든지 괜찮다.)

나는 id가 sexy-span 인 span을 만들어볼 것 이다. 
const span = React.createElement("span", {id="sexy-span"});
위와같이 createElement의 두번쨰 인자로 id를 지정해주면 id가 "sexy-span"인 span 태그가 root안에 생성이 된다. 

이것을 통해 React JS 로 element 를 생성하는 것이 얼마나 편리한지 알 수 있다.  

자 하지만 아직 우리의 span은 텅 비어있다. 
그것은 createElement의 세번째 argument로 들어간다. 
createElement의 세번째 argument 는 span의 content(내용)이다. 

아래와같이 세번쨰 인자로 "Hello im a span" 라는 텍스트를 넣어주면 하기 이미지1 처럼 브라우저에서 "Hello im a span" 을 볼 수 있다. 
const span = React.createElement("span", { id : "sexy-span" }, "Hello im a span");
최종적으로 아래의 코드와 같다. 

*************************************************************************************************************************************
<!DOCTYPE html>
<html lang="en">
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script>
    const root = document.getElementById("root");
    const span = React.createElement("span", { id : "sexy-span", style: {color: "red"} }, "Hello im a span");
    ReactDOM.render(span, root);
</script>
</html>
*************************************************************************************************************************************

단지 빨간 span을 페이지에 두는데 너무 많은 코드가 사용된다고 생각이 든다면 
그 생각이 맞다. 
뭐 root 생성하고, 리액트 2개 import 하고, root 가져오고, element 생성하고, 그 element 를 render 해야한다. 
고작 span 을 페이지에 두는 것일 뿐인데 말이다. 

이럴거면 차라리 그냥 HTML에 한줄 쓰는게 좋을것같은데 말이다. 

이걸통하여 React JS는 기존에 해왔던 방식을 거꾸로 하고 있다는것을 알 수 있다. 
기존 Vanila Javascript는 HTML 을 만들고, 그걸 Javascript 로 가져와서 HTML 을 수정하는 방식이었다. 

하지만 React JS 는 모든것이 Javascript 로 시작된다. 그 다음이 HTML이 되는것이다. 
그리고 이것이 바로 React JS 파워의 핵심이다. 

Javascript 와 React JS 를 사용하여 element를 생성할 때에는 
React JS 가 element를 생성하고 있으니,  이 말은 React JS 는 업데이트가 필요한 element 를 업데이트한다는 말이다. 
즉, ReactJS가 결과물인 HTML을 업데이트할 수 있다는 것이다. 
(= 유저에게 보여질 내용을 컨트롤할 수 있다.)

이것이 핵심이다. 
우리는 HTML을 만들고, 찾아서 가져오고 그리고 나서 업데이트하고.. 이런 방식으로 하지 않는다. 
그저 React JS 에게 업데이트해야 하는 HTML을 업데이트 하라고 할 것이다. 

자 명심할것은 
const span = React.createElement(..)
에서 Javascript를 이용하여 element를 생성하였고 
React JS 가 그걸 HTMl 로 번역한다는 점이다. 




# Events in React 

자 이번에는 버튼을 만들어보고, 버튼에서 일어나는 event를 어떻게 감지하는지도 알아보자. 
결론적으로 아래의 코드를 React JS로 대체할 것이다. 

*************************************************************************************************************************************
<!DOCTYPE html>
<html lang="en">
<body>
    <span>Total Click: 0</span>
    <button id="btn">Click me</button>    
</body>
<script>
    let counter = 0;
    const button = document.getElementById("btn");
    const span = document.querySelector("span");
    function handleClick(event) {
        counter = counter + 1
        span.innerText = `Total Click: ${counter}`
    }
    button.addEventListener("click", handleClick)
</script>
</html>
*************************************************************************************************************************************


일단 button 을 만들고 그것을 root안에 집어 넣는다. 
이제 이정도는 뭐 그냥 할 수 있다. 
*************************************************************************************************************************************
<!DOCTYPE html>
<html lang="en">
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script>
    const root = document.getElementById("root");
    const span = React.createElement("span", { id : "sexy-span", style: {color: "red"} }, "Hello im a span");
    const btn = React.createElement("button", null, "Click me");            <- 버튼 만들고 
    ReactDOM.render(btn, root);                                             <- 버튼을 HTMl에 표시해준다. 
</script>
</html>
*************************************************************************************************************************************

그런데 만약 span과 btn을 모두 render 하고 싶다면 어떻게 할까? 
이런 경우에는 React.createElement() 를 통해 div를 하나 생성하고 React.createElement()의 3번째 인자로 배열을 준 뒤 
그 배열안에 내가만든 span 과 btn을 순서에 맞게 넣어주면 된다. 
3번째 인자는 내용을 의미하니까 그러면 되겠다. 아주 신이난다. 
아래의 코드 참조(span 에서 h3로 태그를 바꿈) 

이미지2 예시

*************************************************************************************************************************************
<!DOCTYPE html>
<html lang="en">
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script>
    const root = document.getElementById("root");
    const h3 = React.createElement("h3", null, "Hello im a span");
    const btn = React.createElement("button", null, "Click me");
    const container = React.createElement("div", null, [h3, btn])
    ReactDOM.render(container, root);
</script> 
</html>
*************************************************************************************************************************************

현재까지 2개의 component를 가지는 component를 생성한거다. 

하지만 내가 하고자 하는것의 본질은 태그를 만들기만 하는것이 아니라 
태그를 만들고 그것을 가져온 뒤 addEventListener 를 붙이고 
그 다음에 lisener function을 붙이는 것이다. 

하지만 우린 위의 내용을 다 해주는 대신에, React JS를 통해서 button 에 property 를 줄 수 있다. 
그리고 그 propery에 eventListener 를 주는것이다. 
property에는 id, style 뿐 아니라 eventListener도 줄 수 있다. 

이것이 React의 POWER 다. 

*************************************************************************************************************************************
<!DOCTYPE html>
<html lang="en">
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script>
    const root = document.getElementById("root");
    const h3 = React.createElement("h3", null, "Hello im a span");    
    const btn = React.createElement(
        "button", 
        {
            onClick: () => console.log("Im clicked"),                       <- property로 eventListener 를 주었다. 
        }, 
        "Click me"
    );
    const container = React.createElement("div", null, [h3, btn])
    ReactDOM.render(container, root);
</script>
</html>
*************************************************************************************************************************************

즉, 아래의 Vanila Javascript 4줄을 아래의 React 코드가 대체한것이다. 
근디 event 이름이 Javascript 에서는 "click" 인데 React JS 에서는 "onClick" 이다.
React 에서는 앞에 on을 붙여줌으로서 eventListener 를 생성하는것을 알려줄 수 있다. 

그래서 eventListener는 브라우저의 태그에서 안보이는거고 
id를 property 로 추가하면 브라우저에서도 태그의 id를 볼 수 있는것이다. 
on으로 eventListener 인지 아닌지 구분 할 수 있으니까. 

*************************************************************************************************************************************
(React JS)
const btn = React.createElement(
    "button", 
    {
        onClick: () => console.log("Im clicked"),
    }, 
    "Click me"
);


(Vanila Javascript)
<button id="btn">Click me</button>    

const button = document.getElementById("btn");
const span = document.querySelector("span");
button.addEventListener("click", handleClick)
*************************************************************************************************************************************

아래처럼 h3에도 eventListener를 추가해줄 수 있다. 
*************************************************************************************************************************************
<!DOCTYPE html>
<html lang="en">
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script>
    const root = document.getElementById("root");
    const h3 = React.createElement(
        "h3", 
        {
            onMouseEnter: () => console.log("Mouse Enter"),
        }, 
        "Hello im a span"
    );    
    const btn = React.createElement(
        "button", 
        {
            onClick: () => console.log("Im clicked"),
        }, 
        "Click me"
    );
    const container = React.createElement("div", null, [h3, btn])
    ReactDOM.render(container, root);
</script>
</html>
*************************************************************************************************************************************

자 우리는 하나의 statement만으로 이렇게 많이 해냈다. 
이것이 바로 React JS의 POWER다. 

React JS 는 바로 interactivity를 위하여 제작된것이다. 

React JS 팀은 알고 있는것이다. 
interactivie 한 어플리케이션에서 하는 작업들 모두가 event들을 감지하는 일이란 것을 말이다. 
addEventListener를 반복하는것 대신에 property에선 event를 등록할 수 있게 된 것이다. 

하지만 초반에 말했듯이 이것은 복잡한 방식이다. 
조금 더 쉬운 방식을 다음번에 알아볼 것이다. 



# JSX 

createElement를 대체할 수 있는 방법에 대해 다뤄볼 것이다. 
굳이 대체하려는 이유는 개발자들에게 좀 더 편리한 도구를 사용하기 위해서다. 

그리고 그 편리한 녀석이 바로 "JSX" 이다. 
JSX는 Javascript를 확장한 문법이다. 

생긴게 HTML이랑 비슷해서, JSX로 React 요소를 만드는 게 개발자들 입장에서 굉장히 편리하나든 장점이 있다. 

자 아래의 코드는 동일한 기능을 하는 코드이다. (이름은 h3에서 Title로 바뀜)
별도로 설명이 필요하지 않을만큰 간단한 문법이다. 
개발자들이 createElement()를 사용하지 않는 이유는 여러가지 것들을 기억해가면서 진행해야 하기 때문이다. 
하지만 JSX는 봤을 때 훨씬 이해하기가 쉽다. 
심지어 HTML과 같은 규칙을 사용하고 말이다. 
(태그 열고 닫고, 내용은 사이 담고, props는 첫 태그 사이에 넣고..)
*************************************************************************************************************************************
(복잡한 React 방식)
const h3 = React.createElement(
    "h3", 
    {
        onMouseEnter: () => console.log("Mouse Enter"),
    }, 
    "Hello im a span"
);

(JSX 사용 쉽다는 방식)
const Title = (
    <h3 
    id="title" 
    onMouseEnter={()=>{
        console.log("mouse entered")
    }}
    >
        Hello Im a title
    </h3>
);
*************************************************************************************************************************************

자 그렇다면 button 까지 JSX 형식으로 작성한 코드는 아래와 같다. 

*************************************************************************************************************************************
<!DOCTYPE html>
<html lang="en">
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script>
    const root = document.getElementById("root");
    const Title = (
        <h3 
        id="title" 
        onMouseEnter={()=>{
            console.log("mouse entered")
        }}
        >
            Hello Im a title
        </h3>
    );
    const Button = (
        <button
            style={{
                backgroundColor: "tomato",
            }}
            onClick={()=>{
                console.log("Im Clicked!!");
            }}
        >
            Click Me!
        
        </button>
    );
    const btn = React.createElement(
        "button", 
        {
            onClick: () => console.log("Im clicked"),
        }, 
        "Click me"
    );
    const container = React.createElement("div", null, [Title, Button])
    ReactDOM.render(container, root);
</script>
</html>
*************************************************************************************************************************************


하지만 이렇게 사용하면 에러가 뜬다. 
왜냐면 아직 브라우저는 JSX의 문법을 모르기때문 늘 그래왔듯이 뭔가 해줘야겠지. 

이걸 이해시키기 위해 우리는 Babel을 사용할 것이다. 
Babel은 코드를 변환해주는 역할을 하는데 내가 JSX로 적은 코드를 브라우저가 이해할 수 있는 형태로 바꿔주는 것이다. 

일단 변환기를 설치해야 하고 
Babel standalone을 이용해서 다운받을 거다. 

*************************************************************************************************************************************
<!DOCTYPE html>
<html lang="en">
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>            <- 여기서 babel import 해주고 
<script type="text/babel">                                                          <- 여기서 내가작성한 React 코드의 type을 지정해준다. 
   .
   .
</script>
</html>
*************************************************************************************************************************************

위처럼 babel을 적용해주니 브라우저가 에러띄우지 않고 잘 동작한다. 
다만 이 방법은 이번 강의를 진행하기 위한 방법이며 효율적이지 않은 느린속도의 방법이라고 한다. 
 

자 이번엔 

const container = React.createElement("div", null, [Title, Button])

이 부분도 JSX 방법을 이용하여 대체해 볼 것이다. 

*************************************************************************************************************************************
const Container = (
    <div>Title Button</div>
);
*************************************************************************************************************************************

그렇다고 이렇게 적어주면 될까?
당연히 안되지 그냥 브라우저에는 "Title Button" 이라는 텍스트만 나올 뿐이다. 

내가 만들어준 Title 과 Button을 포함시키기 위해서 
첫번째로 해야할것은 Title 과 Button 을 함수화 시켜주는것이다. 

기존 함수 구조를 쓴다면 내가 만든 JSX 를 무조건 return 해줘야한다. 아래의 모양처럼 
function Title(){
    return (
        내가만든 JSX
    )
}

하지만 arrow function은 함수내부의 평가결과를 return 해주는 성질이 있으므로 굳이 return 쓸것없다. 
->arrow function쓰는데 중활호로 묶어주면 return 해야함. 소괄호 일때만 retrun 안해도 됨. 
즉, 아래처럼 해줘도 됨. 

Title = () => (
    내가만든 JSX
);

두번째로는 함수화시킨 나의 컴포넌트들을(컴포넌트는 내가만든 React 태그다 라고 생각하면 되겠다.) 
아래와 같은 방식으로 포함시켜주는것이다. 

!!주의해야할점은 컴포넌트의 첫 글자는 반드시 대문자여야 한다!!
만일 소문자로 시작한다면 React랑 JSX 는 이게 HTML 태그라고 생각할 것 이다. 
*************************************************************************************************************************************
const Container = (
    <div>
        <Title/>   <- 대문자!!
        <Button/>  <- 대문자!!
    </div>
);
*************************************************************************************************************************************

보다시피, JSX는 어플리케이션을 여러가지 작은 요소로 나누어 관리할 수 있게 해준다. 
사용자는 여러 요소로 잘게 쪼개서 만들어서 합쳐 주기만 하면 되는 것이다. 

그러면 Container 도 함수화 시켜서 
아래처럼 변환이 가능하겠다. 

*************************************************************************************************************************************
const Container =()=>(
    <div>
        <Title/>
        <Button/>
    </div>
);
ReactDOM.render(<Container/>, root);
*************************************************************************************************************************************


최종적으로 JSX 방식을 사용하여 작성한 코드는 아래와 같으며 
이미지3과 같이 createElement() 를 사용할 때와 동일한 기능을 하고 있다. 

*************************************************************************************************************************************
<!DOCTYPE html>
<html lang="en">
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    const root = document.getElementById("root");
    const Title = ()=> (
            <h3 
            id="title" 
            onMouseEnter={()=>{
                console.log("mouse entered")
            }}
            >
                Hello Im a title
            </h3>
    );
    const Button = ()=>(
        <button
            style={{
                backgroundColor: "tomato",
            }}
            onClick={()=>{
                console.log("Im Clicked!!");
            }}
        >
            Click Me!
        
        </button>
    );
    const Container =()=>(
        <div>
            <Title/>
            <Button/>
        </div>
    );
    ReactDOM.render(<Container/>, root);
</script>
</html>
*************************************************************************************************************************************

지금까지 배운건 어떻게 하면 컴포넌트를 다른 컴포넌트 안에 넣는가 이다. 
그게다임.



# Understanding State 

React의 state에 대해 이해해보자 
state는 기본적으로 데이터가 저장되는 곳이다. 

아래의 Vanila Javascript 로 만든 예제에서는 counter를 증가시키고, 그걸 UI에 디스플레이 하고 있다. 
이 counter를 state로 만들 수 있다.(바뀌는 data를 state로 만들 수 있다는 말)

*************************************************************************************************************************************
<!DOCTYPE html>
<html lang="en">
<body>
    <span>Total Click: 0</span>
    <button id="btn">Click me</button>    
</body>
<script>
    let counter = 0;
    const button = document.getElementById("btn");
    const span = document.querySelector("span");
    function handleClick(event) {
        counter = counter + 1
        span.innerText = `Total Click: ${counter}`
    }
    button.addEventListener("click", handleClick)
</script>
</html>
*************************************************************************************************************************************

일단 위의 기능을 구현하기 위해서 React로 가장 기본적인 뼈대를 만들어 보면 아래와 같다. 

*************************************************************************************************************************************
<!DOCTYPE html>
<html lang="en">
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    const root = document.getElementById("root");
    const Container =()=>(
        <div>
            <h3>Total clicks: 0</h3>
            <button>Click me</button>
        </div>
    );
    ReactDOM.render(<Container/>, root);
</script>
</html>
*************************************************************************************************************************************

물론 이제 eventListener 는 없지만 우리는 현재 Container가 어떤 역할을 하는지는 알고 있다. 
React element를 생성하고 있는데 이 React element 가 곧 div 태그이고 h3 태그와 button 태그를 담고 있다. 

이제 이 React 코드 내에서 카운트를 셀 수 있게 만들어야하는데 
두가지 방법이 있다. 
1. 구린방법 
2. 프로페셔널한 세련된 방법

일단 구린방법으로 먼저 해보고 
이게 왜 구린지 그럼 안구리기 위해선 어떤게 필요하고, 어떤걸 해야하는지 이해하고 나서 
프로페셔널한 세련된 방법으로 만들어보쟝 

1. 구린 방법 

일단 React에서는 증괄호를 통해서 변수를 연결 할 수 있다. 
아래코드 참조
*************************************************************************************************************************************
const root = document.getElementById("root");
let counter = 10;                               <- 여기서 변수 만들어준것을 
const Container =()=>(
    <div>
        <h3>Total clicks: {counter}</h3>        <- 여기서 중괄호로 연결가능하다. 
        <button>Click me</button>
    </div>
);
ReactDOM.render(<Container/>, root);
*************************************************************************************************************************************

위처럼 변수를 연결하고 이제 카운트를 올려주는 함수를 만들어줘야 한다. 

*************************************************************************************************************************************
<!DOCTYPE html>
<html lang="en">
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    const root = document.getElementById("root");
    let counter = 10;
    function countUp(){
        counter = counter + 1;
    }
    const Container =()=>(
        <div>
            <h3>Total clicks: {counter}</h3>
            <button onClick={countUp}>Click me</button>
        </div>
    );
    ReactDOM.render(<Container/>, root);
</script>
</html>
*************************************************************************************************************************************