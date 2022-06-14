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


