# React-Cinema
React Clone Coding (Nomad Coder)

# #Introduction

리액트를 배우기전에 리액트가 무엇을 해결해주는지부터 알아보자. 
리액트는 UI를 Interactive하게 만들어준다. 
-> 리액트는 나의 웹사이트에 interactivity를 만들어준다. 그걸 위해 리액트가 태어났다. 

간단한 웹앱을 JS와 리액트를 이용하여 만들어보고 왜 리액트를 사용해야하는지 알아보자.

리액트를 배우기전에 리액트가 무엇을 해결해주는지부터 알아보자.

리액트는 UI를 Interactive하게 만들어준다.

- > 리액트는 나의 웹사이트에 interactivity를 만들어준다. 그걸 위해 리액트가 태어났다.

간단한 웹앱을 JS와 리액트를 이용하여 만들어보고 왜 리액트를 사용해야하는지 알아보자.

# # Before React

버튼을 클릭할 때 마다 횟수가 카운팅되어 몇번클릭했는지 알려주는 간단한 어플리케이션을 만들어 볼 것 이다.

```html
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
```

1. HTML로 버튼 만들기 
2. Javascript 에서 버튼 가져오기. 
3. addEventListener로 클릭 감지하기 

현재 위의 코드로 상기의 세번째 단계 까지 완성하였다. 

그 다음의 난관은 클릭의 갯수를 세어야 한다는 것 이다.

```jsx
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
```

그러기 위해 위처럼 Total Click 이라고 span을 만들어 놓고 
카운터를 하나 만들어서 이 0 이라는 숫자를 증가시킬것이다. 

아래처럼 카운터를 만든 뒤 클릭하여 counter의 값이 증가할 때 마다 
span안의 text를 coutner의 값으로 두면 된다.

```jsx
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
```

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


# # Our First React Element

```jsx
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
```

현재 목표는 위의 코드를 React JS로 다시 구현하는것이다. 

React JS의 규칙 중 하나는 HTML을 이 페이지에 직접 작성하지 않는다는 것이다. 
HTML 코드를 직접 작성하지 않고 JS와 ReactJS 코드를 사용하여 span이든 뭐든간에 만드는거다. 

두가지 방법을 이용해서 구현해볼것이고 
첫번쨰는 복잡하고 실제 개발자들이 잘 사용하지 않는 방법이지만 ReactJS의 본질을 알기위한 방법,
두번째는 실제 개발자들이 사용하는 비교적 쉬운 방법이다.

### 1. 근본

```html
<!DOCTYPE html>
<html lang="en">
<body></body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>           <- React JS Import
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>   <- React DOM Import
<script></script>
</html>
```

일단 위의 흰 도화지같은 코드에서 클릭을 감지하기 위해 span을 하나 만들어 줄건데
const span = React.createElement("span") 를 통해 생성할 수 있다. 
(위에서 리액트를 import 했기 때문에 createElement function을 가진 React object에 접근할 수 있다.

React.createElement("span")의 span은 실제 HTML 의 태그이름과 똑같아야하지만, 
그걸 받는 변수인 const span 은 굳이 이름이 HTML 태그와 같을 필요는 없다. 
짠 이렇게하면 태그를 하나 생성한것이다. 

이젠 이 만들어준 span을 페이지에 두어야겠지?
HTML에는 아직 없지만 span은 존재한다.
콘솔창에서 span이라는 변수를 출력해보면 뭔말인진 아직 모르겠지만 아무튼 있는걸 볼 수 있다.

```jsx
(콘솔창에 span 출력)
span
{$$typeof: Symbol(react.element), type: 'span', key: null, ref: null, props: {…}, …}
```

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
즉, 간단하게 말하면 **"만들어준 React element를 사용자에게 보여준다."** 이다. 

ReactDOM.render(span, 위치) 를 통해 무엇을 어디에 둘지 지정해줄 수 있다. 
일단 무엇을 둘지는 만들어준 변수명을 통해서 정할 수 있는데 
위치는 HTML안에 div를 만들어서 그 div의 id를 통해서 지정해줄 수 있다. 

지금까지의 과정을 코드로 표현하면 아래와 같다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/311c27f7-73d3-40a8-9e40-e688903978bd/Untitled.png)

```jsx
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
```

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

아래와같이 세번쨰 인자로 "Hello im a span" 라는 텍스트를 넣어주면 하기 이미지처럼 브라우저에서 "Hello im a span" 을 볼 수 있다. 
const span = React.createElement("span", { id : "sexy-span" }, "Hello im a span");
최종적으로 아래의 코드와 같다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/849534c4-b281-42d8-84b1-25c5dbbc318c/Untitled.png)

```jsx
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
```

단지 빨간 span을 페이지에 두는데 너무 많은 코드가 사용된다고 생각이 든다면 
그 생각이 맞다. 
뭐 root 생성하고, 리액트 2개 import 하고, rootimport { disabled } from "express/lib/application"
 가져오고, element 생성하고, 그 element 를 render 해야한다. 
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
React JS 가 그걸 HTML로 번역한다는 점이다.

# # Events in React

자 이번에는 버튼을 만들어보고, 버튼에서 일어나는 event를 어떻게 감지하는지도 알아보자. 
결론적으로 아래의 코드를 React JS로 대체할 것이다.

```jsx
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
```

일단 button 을 만들고 그것을 root안에 집어 넣는다. 
이제 이정도는 뭐 그냥 할 수 있다.

```jsx
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
    const btn = React.createElement("button", null, "Click me");            
<- 버튼 만들고 
    ReactDOM.render(btn, root);                                             
<- 버튼을 HTMl에 표시해준다.
```

그런데 만약 span과 btn을 모두 render 하고 싶다면 어떻게 할까? 
이런 경우에는 React.createElement() 를 통해 div를 하나 생성하고 React.createElement()의 3번째 인자로 배열을 준 뒤 
그 배열안에 내가만든 span 과 btn을 순서에 맞게 넣어주면 된다. 
3번째 인자는 내용을 의미하니까 그러면 되겠다. 아주 신이난다. 
아래의 코드 참조(span 에서 h3로 태그를 바꿈)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/70f04f9a-3d8d-4d88-a17e-00d702e94fc3/Untitled.png)

```jsx
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
```

현재까지 2개의 component를 가지는 component를 생성한거다. 

하지만 내가 하고자 하는것의 본질은 태그를 만들기만 하는것이 아니라 
태그를 만들고 그것을 가져온 뒤 addEventListener 를 붙이고 
그 다음에 listener function을 붙이는 것이다. 

하지만 우린 위의 내용을 다 해주는 대신에, React JS를 통해서 button 에 property 를 줄 수 있다. 
그리고 그 propery에 eventListener 를 주는것이다. 
property에는 id, style 뿐 아니라 eventListener도 줄 수 있다. 

이것이 React의 POWER 다.

```jsx
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
            onClick: () => console.log("Im clicked"),                       
							<- property로 eventListener 를 주었다. 
        }, 
        "Click me"
    );
    const container = React.createElement("div", null, [h3, btn])
    ReactDOM.render(container, root);
</script>
</html>
```

즉, 아래의 Vanila Javascript 4줄을 아래의 React 코드가 대체한것이다. 
근디 event 이름이 Javascript 에서는 "click" 인데 React JS 에서는 "onClick" 이다.
React 에서는 앞에 on을 붙여줌으로서 eventListener 를 생성하는것을 알려줄 수 있다. 

그래서 eventListener는 브라우저의 태그에서 안보이는거고 
id를 property 로 추가하면 브라우저에서도 태그의 id를 볼 수 있는것이다. 
on으로 eventListener 인지 아닌지 구분 할 수 있으니까.

```jsx
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
```

아래처럼 h3에도 eventListener를 추가해줄 수 있다.

```jsx
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
```

자 우리는 하나의 statement만으로 이렇게 많이 해냈다. 
이것이 바로 React JS의 POWER다. 

React JS 는 바로 interactivity를 위하여 제작된것이다. 

React JS 팀은 알고 있는것이다. 
interactivie 한 어플리케이션에서 하는 작업들 모두가 event들을 감지하는 일이란 것을 말이다. 
addEventListener를 반복하는것 대신에 property에선 event를 등록할 수 있게 된 것이다. 

하지만 초반에 말했듯이 이것은 복잡한 방식이다. 
조금 더 쉬운 방식을 다음번에 알아볼 것이다.

# # JSX

createElement를 대체할 수 있는 방법에 대해 다뤄볼 것이다. 
굳이 대체하려는 이유는 개발자들에게 좀 더 편리한 도구를 사용하기 위해서다. 

그리고 그 편리한 녀석이 바로 "JSX" 이다. 
JSX는 Javascript를 확장한 문법이다. 

생긴게 HTML이랑 비슷해서, JSX로 React 요소를 만드는 게 개발자들 입장에서 굉장히 편리하다는 장점이 있다. 

자 아래의 코드는 동일한 기능을 하는 코드이다. (이름은 h3에서 Title로 바뀜)
별도로 설명이 필요하지 않을만큰 간단한 문법이다. 
개발자들이 createElement()를 사용하지 않는 이유는 여러가지 것들을 기억해가면서 진행해야 하기 때문이다. 
하지만 JSX는 봤을 때 훨씬 이해하기가 쉽다. 
심지어 HTML과 같은 규칙을 사용하고 말이다. 
(태그 열고 닫고, 내용은 사이 담고, props는 첫 태그 사이에 넣고..)

```jsx
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
```

자 그렇다면 button 까지 JSX 형식으로 작성한 코드는 아래와 같다.

```jsx
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
```

하지만 이렇게 사용하면 에러가 뜬다. 
왜냐면 아직 브라우저는 JSX의 문법을 모르기때문 늘 그래왔듯이 뭔가 해줘야겠지.

이걸 이해시키기 위해 우리는 Babel을 사용할 것이다. 
Babel은 코드를 변환해주는 역할을 하는데 내가 JSX로 적은 코드를 브라우저가 이해할 수 있는 형태로 바꿔주는 것이다. 

일단 변환기를 설치해야 하고 
Babel standalone을 이용해서 다운받을 거다.

```jsx
<!DOCTYPE html>
<html lang="en">
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>                  <- 여기서 babel import 해주고 
<script type="text/babel">                                                          <- 여기서 내가작성한 React 코드의 type을 지정해준다. 
   .
   .
</script>
</html>
```

위처럼 babel을 적용해주니 브라우저가 에러띄우지 않고 잘 동작한다. 
다만 이 방법은 이번 강의를 진행하기 위한 방법이며 효율적이지 않은 느린속도의 방법이라고 한다. 
 
자 이번엔

```jsx
const container = React.createElement("div", null, [Title, Button])
```

이 부분도 JSX 방법을 이용하여 대체해 볼 것이다.

```jsx
const Container = (
    <div>Title Button</div>
);
```

그렇다고 이렇게 적어주면 될까?
당연히 안되지 그냥 브라우저에는 "Title Button" 이라는 텍스트만 나올 뿐이다. 

내가 만들어준 Title 과 Button을 포함시키기 위해서 
첫번째로 해야할것은 Title 과 Button 을 함수화 시켜주는것이다. 

기존 함수 구조를 쓴다면 내가 만든 JSX 를 무조건 return 해줘야한다. 아래의 모양처럼

```jsx
function Title(){
    return (
        내가만든 JSX
    )
}
```

하지만 arrow function은 함수내부의 평가결과를 return 해주는 성질이 있으므로 굳이 return 쓸것없다. 
->arrow function쓰는데 중활호로 묶어주면 return 해야함. 소괄호 일때만 retrun 안해도 됨. 
즉, 아래처럼 해줘도 됨.

```jsx
Title = () => (
    내가만든 JSX
);
```

두번째로는 함수화시킨 나의 컴포넌트들을(컴포넌트는 내가만든 React 태그다 라고 생각하면 되겠다.) 
아래와 같은 방식으로 포함시켜주는것이다.

!!주의해야할점은 컴포넌트의 첫 글자는 반드시 대문자여야 한다!!
만일 소문자로 시작한다면 React랑 JSX 는 이게 HTML 태그라고 생각할 것 이다.

```jsx
const Container = (
    <div>
        <Title/>   <- 대문자!!
        <Button/>  <- 대문자!!
    </div>
);
```

보다시피, JSX는 어플리케이션을 여러가지 작은 요소로 나누어 관리할 수 있게 해준다. 
사용자는 여러 요소로 잘게 쪼개서 만들어서 합쳐 주기만 하면 되는 것이다. 

그러면 Container 도 함수화 시켜서 
아래처럼 변환이 가능하겠다.

```jsx
const Container =()=>(
    <div>
        <Title/>
        <Button/>
    </div>
);
ReactDOM.render(<Container/>, root);
```

최종적으로 JSX 방식을 사용하여 작성한 코드는 아래와 같으며 
하기이미지과 같이 createElement() 를 사용할 때와 동일한 기능을 하고 있다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/930acc80-dbb9-4d82-969d-e4f8d7f8d490/Untitled.png)

```jsx
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
```

지금까지 배운건 어떻게 하면 컴포넌트를 다른 컴포넌트 안에 넣는가 이다. 
그게다임.


# # Understanding State

React의 state에 대해 이해해보자 
state는 기본적으로 데이터가 저장되는 곳이다. 

아래의 Vanila Javascript 로 만든 예제에서는 counter를 증가시키고, 그걸 UI에 디스플레이 하고 있다. 
이 counter를 state로 만들 수 있다.(바뀌는 data를 state로 만들 수 있다는 말)

```jsx
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
```

일단 위의 기능을 구현하기 위해서 React로 가장 기본적인 뼈대를 만들어 보면 아래와 같다.

```jsx
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
```

물론 이제 eventListener 는 없지만 우리는 현재 Container가 어떤 역할을 하는지는 알고 있다. 
React element를 생성하고 있는데 이 React element 가 곧 div 태그이고 h3 태그와 button 태그를 담고 있다. 

이제 이 React 코드 내에서 카운트를 셀 수 있게 만들어야하는데 
두가지 방법이 있다. 
1. 구린방법 
2. 프로페셔널한 세련된 방법

일단 구린방법으로 먼저 해보고 
이게 왜 구린지 그럼 안구리기 위해선 어떤게 필요하고, 어떤걸 해야하는지 이해하고 나서 
프로페셔널한 세련된 방법으로 만들어보쟝 

### 1. 구린 방법

일단 React에서는 증괄호를 통해서 변수를 연결 할 수 있다. 
아래코드 참조

```jsx
const root = document.getElementById("root");
let counter = 0;                               <- 여기서 변수 만들어준것을 
const Container =()=>(
    <div>
        <h3>Total clicks: {counter}</h3>        <- 여기서 중괄호로 연결가능하다. 
        <button>Click me</button>
    </div>
);
ReactDOM.render(<Container/>, root);
```

위처럼 변수를 연결하고 이제 카운트를 올려주는 함수를 만들어줘야 한다. 
뭐 새로운걸 하는게 아니다. 
button에 eventListener 연결하고 
이 eventListener 가 countUp 함수를 호출하고 countUp은 카운트를 바꿔줄 것이다.

```jsx
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
    let counter = 0;
    function countUp(){             **<- 2. countUp 함수가 counter 변수의 값을 바꿔준다.** 
        counter = counter + 1;
    }
    const Container =()=>(
        <div>
            <h3>Total clicks: {counter}</h3>
            <button onClick={countUp}>Click me</button>     
					**<- 1. button에 eventListener 연결 후 eventListener 가 countUp 함수를 호출하면**
        
				</div>
    );
    ReactDOM.render(<Container/>, root);
</script>
</html>
```

자 그럼 위처럼 코드를 작성해주면 이제 카운터를 변경해주니까 끝인걸까?
당연히 아니지. 
인생이 이렇게 쉬울리 없지. 
버튼을 클릭하면 counter 변수값은 변한다.(콘솔창을 통해서 확인 가능)
다만 페이지에 표시되는 "Total clicks: {counter}" 의 값은 여전히 0 이다. 

왜일까?

왜냐면 우리는 컴포넌트를 단 한번만 렌더링하기 때문이다. 

생각을 해보면 우리가 어플리케이션을 시작했을 때 counter는 0 이다. 
그리고 Container 는 함수라서 곧바로 실행되지 않고 

ReactDOM.render(<Container/>, root);

이것만 우리가 페이지를 로드했을 때 바로 실행된다. 
그래서 이 
ReactDOM.render(<Container/>, root); 
코드가 실행되면 Container 컴포넌트가 렌더링 될텐데 그 말은 Container 안의 코드들

```jsx
<div>
<h3>Total clicks: {counter}</h3>
<button onClick={countUp}>Click me</button>
</div>
```

이 코드들이 React element 가 될거란 뜻이다. 

여기서 문제가 발생한다. 
페이지를 처음 로드했을 때 Container 가 렌더링 되고 그때의 counter 값은 0이기 때문에 
브라우저에는 "Total clicks: 0" 이 잘 로드되지만 

그 이후 counter 값이 변할 때 마다 Container 를 리렌더링 하지 않기 때문에 
우리가 아무리 버튼을 클릭해도 실제 브라우저에 보여지는 counter 값은 변하지 않는것이다. 

그럼 당연히 새로운 버전의 Container 를 리렌더링해서 다시 보여줘야지 

즉, countUp 을 호출할 때마다

ReactDOM.render(<Container/>, root);

이 코드를 다시 호출하고 싶은것이다. 

그렇다면 아래코드처럼 countUp 함수를 다시 실행할 때 
ReactDOM.render(<Container/>, root);
를 다시 호출하면 되겠다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/835b64b7-b79a-46e1-9bf1-4836235b568a/Untitled.png)

```jsx
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
    let counter = 0;
    function countUp(){
        counter = counter + 1;
        ReactDOM.render(<Container/>, root);
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
```

짠 위처럼 코드를 작성해주니 버튼을 클릭할 때 마다 페이지에 잘 출력이 된다. 
어찌보면 당연한거지 
왜냐면 리렌더링할 땐 counter 의 값이 내가 클릭한 횟수로 들어가있을테니까 

그렇다면 어떤 아래처럼 render 라는 함수를 따로 만들어서 
반복적으로 사용하기 용이한 코드로 변환시키는것이 추후 유지보수에 더욱 합리적일것이다.

```jsx
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
    let counter = 0;
    function countUp() {
        counter = counter + 1;
        ReactDOM.render(<Container/>, root);
    }
    function render() {         **<- 따로 render라는 함수를 만들어서 Container 를 리렌더링하기 용이하게 할 수 있다.**
        ReactDOM.render(<Container/>, root);
    }
    const Container =()=>(
        <div>
            <h3>Total clicks: {counter}</h3>
            <button onClick={countUp}>Click me</button>
        </div>
    );
    render();
</script>
</html>
```

하지만 초반에 말했듯이 이것은 구린방법이다. 
왜냐면 이건 우리가 값을 바꿀때마다, 다시 렌더링하는걸 잊어선 안되기 때문이다. 

세련된 방법으로 넘어가기전에 리액트의 엄청난 장점을 짚고 넘어가보자. 

Vanila Javascript 로 만들었을 경우 하기 이미지 처럼 
Total clicks 를 포함하여 태그 전체를 업데이트한다. 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dc7ba9d2-ef95-451f-83fe-9ceaba6be503/Untitled.png)

하지만 React 를 사용한겨우 하기 이미지 처럼 
UI에서 바뀐 숫자부분만 업데이트 해준다. 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/77a7a23c-18e2-4f7a-8924-11fb45c70fe2/Untitled.png)

이것은 엄청나게 중요한 장점이다. 
지금 보다시피 React JS 는 이전에 렌더링된 컴포넌트는 어떤거였는지 확인하고 
다음에 렌더링될 컴포넌트는 어떤지를 보고 
React JS 는 다른 부분만 파악하고나서(내가 바꾼부분)
또다시 Totla clicks 를 생성할 필요 없이 오로지 바뀐 부분만 업데이트 해줄 수 있다. 

버튼을 클릭할 때, 물론 Container 컴포넌트 전체를 리렌더링하는 것이지만 
HTML 코드에서는 오로지 숫자만 바뀌는것이다. 

이건 진짜 엄청 좋은것이다. 
굉장히 interactivie 한 어플을 만들 수 있다는 뜻 이니까!

내가 여러가지 요소들을 리렌더링하려고 해도, 전부다 새로 생성되진 않을것이다. 
오로지 바뀐부분만 새로 생성될것이다.


# # setState part One

일단 시작하기에 앞서 Container 컴포넌트의 이름을 App 으로 바꿔주었다. 
(원래 다들 이렇게 이름 지음. 나는 아직 허접이니 대세를 따르자)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/57b8452c-23fe-46e3-b549-21f25f0cb871/Untitled.png)

```jsx
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
    let counter = 0;
    function countUp() {
        counter = counter + 1;
        ReactDOM.render(<App/>, root);
    }
    function render() {
        ReactDOM.render(<App/>, root);
    }
    const App =()=>(
        <div>
            <h3>Total clicks: {counter}</h3>
            <button onClick={countUp}>Click me</button>
        </div>
    );
    render();
</script>
</html>
```

위의 코드는 우리가 원하는대로 잘 동작해준다. 
버튼을 클릭하면 페이지의 클릭 카운트가 잘 올라간다. 

하지만 이전에 말했듯 이것은 구린 방법이다. 
데이터가 바뀔때마다 이 render() 함수를 호출하는걸 잊어서는 안된다는 점 이다. 

별로 즐거운 작업은 아니다. 
리렌더링을 일으키는데 좀 더 나은 방식이 있을거다. 

이제 그것이 뭔지 아라보자. 

우리는 counter가 0인 시점에서 최초로 렌더링을 할 것이다. 
그리고 counter가 값을 증가시킬 때 리렌더링하게 해주었다. 
초기 컴포넌트가 초기 데이터를 가지고 렌더링 되고, 버튼을 클릭하면 다시 렌더링하고 싶은거다. 

하지만 말했듯 이것은 좋은방법이 아니다. 

그래서 이제부터 Reat.js 어플 내에서 데이터를 보관하고 render() 함수를 계속 불러줄 필요 없는
자동으로 리렌더링을 일으킬수 있는 세련된 방법을 배워볼것이다. 

이제부터 React.js 가 내가 원하는 리렌더링을 어떻게 도와주는지 알아보자. 

그 이유는 내가 만약 사용자에게 업데이트된걸 보여주고싶다면 새로운 정보를 가지고 컴포넌트를 리렌더링해줘야 하기 때문이다. 
(위에서 했던말임. render() 함수로 계속 App 컴포넌트를 리렌더링 해줬잔여)

```jsx
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
    function App() {
        return (
            <div>
                <h3>Total clicks: 0</h3>
                <button>Click me</button>
            </div>
        );
    }
    ReactDOM.render(<App/>, root);
</script>
</html>
```

일단 위처럼 다시 아무기능도 없는 노잼 컴포넌트로 다시 돌아가자. 

자 이제 React 어플리케이션을 다룰때, 어디에 데이터를 담으면 되는지 아라보자. 
일단 App 컴포넌트를 만들어주는 함수내에서 return문 전에 상수를 하나 만들어주고 
그 상수에 React.useState()를 사용할것이다. 
아래처럼

```jsx
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
    function App() {
        const data = React.useState();  
							<- return문 전에 data 라는 상수에 React.useState() 사용
        console.log(data);              <- 뭐가 나올까? 

        return (
            <div>
                <h3>Total clicks: 0</h3>
                <button>Click me</button>
            </div>
        );
    }
    ReactDOM.render(<App/>, root);
</script>
</html>

(결과 콘솔창)
(2) [undefined, ƒ]
0: undefined
1: ƒ ()
length: 2
[[Prototype]]: Array(0)
```

자 data를 출력해본 결과 undefined 값과 함수를 지닌 배열이 나왔다. 
흥미롭다. 

무슨일이 일어난거냐면 React.js가 
const data = React.useState();
이 코드를 가지고 
이전에 작성했던 counter 변수와 countUp 함수의 기능을 동시에 제공해주고 있는것이다. 

그래서 이 코드를 통해 얻게 되는 건 
undefined 와 함수 하나다. 

내가 알아야할것은 저

```jsx
0: undefined <- 이게 data 이고, 이전으로 치면 counter 변수의 역할이겠지
1: ƒ () <- 이게 data를 바꿀 때 사용하는 함수이고, 이전에 작성했던 countUp 함수의 역할을 한다.
```

React.useState 는 초기값을 설정할 수도 있다.

```jsx
const data = React.useState(0);

(콘솔 출력)
(2) [0, ƒ]
0: 0        <- 짠 초기값으로 0이 나옴
1: ƒ ()
length: 2
[[Prototype]]: Array(0)
```

위처럼 괄호안에 값을 넣어주면 그 값을 초기값으로 가지게 된다. 

자 그렇다면

```jsx
const data = React.useState(0);
const counter = data[0];  
const countUp = data[1];
```

이렇게 할당해줘도 문제가 되지 않겠지 
하지만 이걸 좀 더 세련된 문법으로 바꿔주면

```jsx
const [counter, countUp] = React.useState(0);
```

이렇게 바꿀 수 있는것을 나는 안다. 
일단 현재까지의 코드는 아래와 같다.

```jsx
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
    function App() {
        const [counter, countUp] = React.useState(0);
        
        return (
            <div>
                <h3>Total clicks: {counter}</h3>
                <button>Click me</button>
            </div>
        );
    }
    ReactDOM.render(<App/>, root);
</script>
</html>
```

자 일단 counter라는 변수에 값을 담는것까지 해보았다. 
이제 어떻게 useState를 사용하여 만든 countUp 을 이용하여 counter의 값을 바꿔줄지 
그리고 왜 useState를 사용하여 만든 countUp이 필요한지 아라보자.


# # setState part Two

```jsx
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
    function App() {
        const [counter, countUp] = React.useState(0);
        
        return (
            <div>
                <h3>Total clicks: {counter}</h3>
                <button>Click me</button>
            </div>
        );
    }
    ReactDOM.render(<App/>, root);
</script>
</html>
```

자 일단 React.js가 data를 담는것과 업데이트하는걸 어떻게 도와주는지 배워봤다. 
useState를 사용했을 때 useState는 우리한테 배열 하나를 주는데 

그 배열의 첫번째 요소는 우리가 담으려는 counter 값이고 
두번째 요소는 이 counter 값을 바꿀 때 사용하는 countUp 함수이다. 

이제 counter를 업데이트하는데 countUp 함수를 사용해보려고 한다. 
countUp 함수는 값을 하나 받는다. 

어떤 값을 부여하던지 countUp 함수는 그 값으로 업데이트하고 리렌더링을 일으킨다. 

이전에는 render() 함수에 ReactDOM.render(<App/>, root) 를 직접 실행시켜줌으로서 리렌더링을 했지만 
(아래의 코드 참고)

```jsx
(이전 직접 리렌더링하던 버전)

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
    let counter = 0;
    function countUp() {
        counter = counter + 1;
        ReactDOM.render(<Container/>, root);
    }
    function render() {                         
						<- 따로 render라는 함수를 만들어서 Container 를 리렌더링하기 용이하게 할 수 있다.
        ReactDOM.render(<Container/>, root);
    }
    const Container =()=>(
        <div>
            <h3>Total clicks: {counter}</h3>
            <button onClick={countUp}>Click me</button>
        </div>
    );
    render();
</script>
</html>
```

이젠 countUp 함수를 가지고 있고, 이걸로 값을 바꿔줄 것이다. 
이 countUp() 함수안에 직접 값을 넣어주면 어떻게 되는지 버튼에 onClick eventListener 를 추가해주고 
확인해보면 버튼을 클릭해줬을 때 컴포넌트가 리렌더링 되면서 브라우저의 값이 바뀌는것을 볼 수 있다. 
아주 놀랍도다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/457438c2-b217-400f-8c39-bdf52cdb867a/Untitled.png)

```jsx
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
    function App() {
        const [counter, countUp] = React.useState(0);
        const onClick = () => {
            countUp(987987);
        };
        return (
            <div>
                <h3>Total clicks: {counter}</h3>
                <button onClick={onClick}>Click me</button>
            </div>
        );
    }
    ReactDOM.render(<App/>, root);
</script>
</html>
```

countUp 함수를 사용하여 counter 값을 변경해주자 내가 별도로 직접 리렌더링을 해주지 않아도 
알아서 리렌더링이 되는 놀라운 광경을 목격하였다. 
React.js 가 날 도와준것이지. 

자 그럼 이제 클릭했을 때 counter 값에 1을 더해주도록 변경만 해주면 되겠다. 

또한 대부분의 개발자들은 counter 처럼 받는 데이터 값은 지들맘대로 이름 붙이지만 
countUp 처럼 값을 수정해주는 함수는 앞에 set을 붙여서 setCounter 라고 이름을 붙인다. 
나는 아직 허접이니까 그들을 따라해야한다. 

이렇게 만든 최종본이 아래와 같다.

```jsx
(useState 를 이용한 자동 리렌더링)

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
    function App() {
        const [counter, setCounter] = React.useState(0);
        const onClick = () => {
            setCounter(counter + 1);
        };
        return (
            <div>
                <h3>Total clicks: {counter}</h3>
                <button onClick={onClick}>Click me</button>
            </div>
        );
    }
    ReactDOM.render(<App/>, root);
</script>
</html>
```

우리는 counter 라는 데이터를 받아서 
App 컴포넌트의 return 값에 그 데이터를 담고 있다. 

그 말인 즉,

```jsx
<div>
    <h3>Total clicks: {counter}</h3>
    <button onClick={onClick}>Click me</button>
</div>
```

이 부분이 사용자가 보게될 컴포넌트라는 뜻이다. 
그리고 버튼이 클릭되면, counter 값을 바꿔줄 함수를 호출할건데 
counter의 새로운 값을 가지고 해당 함수를 호출해줄거다. 

그 새로운 값은 현재 counter값 +1 이 될것이고 말이다. 

그리고 물론 이것이 리렌더링되는 과정에서 React.js는 오로지 바뀌는 숫자 부분만을 업데이트 해주고 있따. 
React의 매직이지. 
React는 업데이트 사이사이마다, 정확히 어떤것이 업데이트됐는지 파악해서 
HTML에서 그 부분만 고친다. 

PS. 
setCounter 를 사용하여 state 값을변경해주면 컴포넌트 자체가 새로 생성된다는 뜻이다.

```jsx
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
    function App() {
        const [counter, setCounter] = React.useState(0);
        const onClick = () => {
            setCounter(counter + 1);
        };
        console.log("rendered");
        console.log(counter);
        return (
            <div>
                <h3>Total clicks: {counter}</h3>
                <button onClick={onClick}>Click me</button>
            </div>
        );
    }
    ReactDOM.render(<App/>, root);
</script>
</html>
```

위처럼 App 컴포넌트 함수안에 새로 실행될 때 마다 counter 값과 "rendered" 라는 텍스트를 출력하도록 작성 후 버튼을 계속 클릭해보면 
하기 이미지처럼 콘솔창에 계속해서 출력이 되는것을 볼 수 있다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/13e054be-5639-4424-b371-05f2e57476c4/Untitled.png)

즉, 컴포넌트 자체가 새로 재생성 된것이다. 
이게 바로 React.js 가 제공하는 useState의 가장 중점적인 부분이다. 

데이터가 바뀔때마다 컴포넌트를 리렌더링하고 UI를 refresh 하는것이다. 
그리고 물론 HTML을 전부다 바꾸는게 아니라 내가 수정하는 부분만 바뀌는 것이다. 

Vanila Javascript 와 비교하면 여러가지로 장점이 많은것 같다. 
HTML 요소를 생성하거나 찾을 필요도 없고 
eventListener 를 더해줄 필요도 UI를 업데이트해줄 필요도 없다. 
바로 HTML을 만들어서 거기에 곧바로 eventListener 를 더해주고(onClick 그냥 바로 꽂아버림)
그리고 UI를 자동으로 리렌더링 해준다.


# # State Functions

state에 대해 배웠고 이걸 계속 연습하는 시간을 가질것이다. 
그리고 사용자들의 input을 어떻게 얻는지, 
form을 만들었을 때 state는 어떤식으로 작용하는지에 대해도 알아볼것이다.

```jsx
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
    function App() {
        const [counter, setCounter] = React.useState(0);
        const onClick = () => {
            setCounter(counter + 1);
        };
        console.log("rendered");
        console.log(counter);
        return (
            <div>
                <h3>Total clicks: {counter}</h3>
                <button onClick={onClick}>Click me</button>
            </div>
        );
    }
    ReactDOM.render(<App/>, root);
</script>
</html>
```

위의 코드는 별로 좋은 방법이 아니다. 
왜냐하면 counter는 다른곳에서 update 될 수 있기 때문이다. 
어쩌면 counter가 다른곳에서 변경이 되어서 내가 생각했던 값이 아닐 수 있다. 
이전 단계의 state를 이용해서 현재 state를 바꾸려 했지만, 결과가 예상과 다르게 나오는것이다.

state를 변경함에 있어서 두가지 방법이 있는데 
하나는 직접 값을 입력해주는 방법

```jsx
const onClick = () => {
    setCounter("직접값을 입력");
};
```

두번째는 이전 값을 이용해서 현재 값을 계산해 내는 방법.

```jsx
const onClick = () => {
    setCounter(counter + 1);
};
```

현재 두번쨰 방법을 사용하면서 위와같은 코드를 사용했지만 이것보다 더 나은 방법이 있다. 

위의 코드에서는 현재의 counter값을 가지고 계산해주고 있다. 
만약 내가 현재 값을 가지고 계산 해야한다면 
setCounter() 함수안에 함수를 인자로 넣는것이다. 

이 함수의 첫번째 인자는 현재의 값이다.(현재 counter값)
그리고 이 함수의 return 값이 새로운 state가 되는것이다.

```jsx
const onClick = () => {
    setCounter(current => current + 1);
};
```

자 그럼 두개를 비교해보자.

```jsx
1.
const onClick = () => {
    setCounter(counter + 1);
};

2.
const onClick = () => {
    setCounter(current => current + 1);
};
```

사실 이 두개는 똑같은 작업을 한다. 
둘다 현재의 state를 가지고 새로운 값을 계산해낸다. 하지만 2번이 더 안전하다. 
왜냐하면 current 값은 확실히 현재 값이라는걸 리액트가 보장하기 때문이다. 

state에 저장되어있는 레알 현재값이라는 거지. 
counter는 내가 state의 값을 받아서 따로 변수에 넣은것이고 그것은 다른 실수로 인해 건들 수 있지만 
저것은 레알 state의 현재값 이라는 것이 보장이 된다는것이지. 

짠 그럼 코드를 아래처럼 바꿔주는게 더 안전하겠다.

```jsx
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
    function App() {
        const [counter, setCounter] = React.useState(0);
        const onClick = () => {
            setCounter(current => current + 1);
        };
        console.log("renderd");
        console.log(counter);
        return (
            <div>
                <h3>Total clicks: {counter}</h3>
                <button onClick={onClick}>Click me</button>
            </div>
        );
    }
    ReactDOM.render(<App/>, root);
</script>
</html>
```


# # Inputs and State

단위 변환 앱을 만들어 볼것이다. 
분 -> 시간, 시간 -> 분 뭐 이렇게 변환시켜주는 앱 이다. 
일단 아래처럼 input box 2개를 넣어주고 각각 시간과 분을 의미해주도록 placeholder 를 달아준다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0c644505-3b95-4541-a3f4-13b15c068ce3/Untitled.png)

```jsx
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
    function App() {
        return (
            <div>
                <h1>Super Converter</h1>
                <input placeholder="Minutes" type="number" />
                <input placeholder="Hours" type="number" />
            </div>
        );
    }
    ReactDOM.render(<App/>, root);
</script>
</html>
```

자 이제 JSX 에 대한 새로운것이 등장한다. 
봐왔다시피 JSX는 HTML과 매우 유사하다. 

내가 만든 input 태그들은 전부 HTML로 써도 전혀 문제가 되지 않는다.
요 코드에 label 태그를 예로들어보자. 
label은 input 옆에 써주는 글씨이다. 
만약 누가 이 label을 클릭하면 그 옆 input이 선택된다. 

아래처럼 Minutes, Hours 라는 label 을 만들고 이 label을 input에 연결시키기 위해 
input은 id가 있어야한다. 

그리고 label 에 "for" 속성의 값을 연결시키고자 하는 input 의 id 값과 같게 입력함으로서 
label과 input은 서로 연결되게 된다. 
연결되면 label을 클릭하면 input에 값을 입력할 수 있게 된다.

```jsx
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
    function App() {
        return (
            <div>
                <h1>Super Converter</h1>
                <label for="minutes">Minutes</label>                        
													<- 여기에 for 값과 
                <input id="minutes" placeholder="Minutes" type="number" />  
													<- 여기 id 값이 일치되면 연결된다. 
                <label for="hours">Hours</label>
                <input id="hours" placeholder="Hours" type="number" />
            </div>
        );
    }
    ReactDOM.render(<App/>, root);
</script>
</html>
```

하지만 이것은 기존 HTML에서 쓰는 방법이고 
리액트 즉, JSX에서는 다르게 표현해줘야 한다. 

근데 에러가 나지 않은 이유는 production.min.js 를 사용중이기 때문이다.

```jsx
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
```

만일 이것을 developement.min.js 로 바꾸면 에러가 뜬다.

```jsx
<script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
```

```jsx
(에러 메세지)
react-dom.development.js:61 Warning: Invalid DOM property `for`. Did you mean `htmlFor`?
    at label
    at div
    at App
```

보다시피 유효하지 않은 DOM propery 'for' 가 있다고 에러를 띄운다. 
"HTML for 를 의미하니?" 라고도 물어본다. 

왜 for 같은 몇가지 용어들을 사용할 수 없냐면 일단 for는 Javascript 용어이기 때문이다. 
마치 class같은 용어도 Javascript 용어인것처럼 이미 선점된 단어이다. 

아래처럼 h1에 class를 지정해줘도 동일한 에러가 나온다.

```jsx
<!DOCTYPE html>
<html lang="en">
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script> 
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    const root = document.getElementById("root");
    function App() {
        return (
            <div>
                <h1 class="title">Super Converter</h1>
                <label for="minutes">Minutes</label>
                <input id="minutes" placeholder="Minutes" type="number" />
                <label for="hours">Hours</label>
                <input id="hours" placeholder="Hours" type="number" />
            </div>
        );
    }
    ReactDOM.render(<App/>, root);
</script>
</html>

(에러메세지)
react-dom.development.js:61 Warning: Invalid DOM property `class`. Did you mean `className`?
    at h1
    at div
    at App

react-dom.development.js:61 Warning: Invalid DOM property `for`. Did you mean `htmlFor`?
    at label
    at div
    at App
```

이러한것들은 JSX에 맞게 그 이름을 변경하여 사용해주면 된다. 
class=> className 
for=> htmlFor

```jsx
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
    function App() {
        return (
            <div>
                <h1 className="title">Super Converter</h1>                  
											<- JSX에 맞게 이름 변경
                <label htmlFor="minutes">Minutes</label>                    
											<- JSX에 맞게 이름 변경
                <input id="minutes" placeholder="Minutes" type="number" />
                <label htmlFor="hours">Hours</label>                        
											<- JSX에 맞게 이름 변경
                <input id="hours" placeholder="Hours" type="number" />
            </div>
        );
    }
    ReactDOM.render(<App/>, root);
</script>
</html>
```

자 이제부터가 중요하다. 
minutes에 필요한 state를 이제 만들어 보자. 
그전에 문제가 한가지 있는데 input 박스 안의 value를 어떻게 얻는지 아직 모른다는 점이다. 
아직 리액트로 하는법은 배우지 못했다. 

리액트에서 input은 uncontrolled 라고 알려져있다. 
그 말인 즉, input의 value는 내가 통제할 수 없다는 뜻이다. 

그래서 이제 state를 만들어 줄거다. 
state의 default값은 null, 아무것도 안적어줄것이다. 

아래처럼 현재값을 minutes 변수에 받고 minutes를 수정해주는 modifier는 setMinutes 라고 정의한다.

```jsx
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
    function App() {
        const [minutes, setMimutes] = React.useState();
        return (
            <div>
                <h1 className="title">Super Converter</h1>
                <label htmlFor="minutes">Minutes</label>
                <input id="minutes" placeholder="Minutes" type="number" />
                <label htmlFor="hours">Hours</label>
                <input id="hours" placeholder="Hours" type="number" />
            </div>
        );
    }
    ReactDOM.render(<App/>, root);
</script>
</html>
```

그리고 이제 value를 input에게 줄 수 있다.

```jsx
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
    function App() {
        const [minutes, setMimutes] = React.useState();
        return (
            <div>
                <h1 className="title">Super Converter</h1>
                <label htmlFor="minutes">Minutes</label>
                <input 
                    value={minutes}         **<- state 를 input의 value로 주었다.** 
                    id="minutes" 
                    placeholder="Minutes" 
                    type="number" 
                />
                <label htmlFor="hours">Hours</label>
                <input id="hours" placeholder="Hours" type="number" />
            </div>
        );
    }
    ReactDOM.render(<App/>, root);
</script>
</html>
```

자 이제 minute의 값을 넣어주는 input이 있고, 
그리고 그 값은 minutes 가 될거다. 
그리고 minutes 은 state에 있다. 

이제 해야할것은 사용자가 다른 값을 입력할 때마다 이 value를 업데이트 시키는거다. 
사용자가 input에 새로운 값을 입력할 때마다 이 state를 업데이트 하고싶다. 

그리고 이 새로운 값을 입력할 때 발생하는 event가 change 이고 JSX니까 onChange 라고 해줘야한다.

```jsx
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
    function App() {
        const [minutes, setMimutes] = React.useState();
        const onChange = () => {
            console.log("Somebody Wrote");
        }
        return (
            <div>
                <h1 className="title">Super Converter</h1>
                <label htmlFor="minutes">Minutes</label>
                <input 
                    value={minutes}
                    id="minutes" 
                    placeholder="Minutes" 
                    type="number" 
                    onChange={onChange}
												**<- input박스에 뭔가 값이 입력되었을 때 감지하는 이벤트리스너**
                />
                <label htmlFor="hours">Hours</label>
                <input id="hours" placeholder="Hours" type="number" />
            </div>
        );
    }
    ReactDOM.render(<App/>, root);
</script>
</html>
```

자 위의 코드 즉, 지금까지의 내용을 정리해보면 
우린 react에서 가져온 state를 사용하고 있다. 
이 state에서 우리는 데이터도 얻고, 업데이트도 진행하고 있다. 

array의 첫번째 item 인 minutes는 state의 value 다. 
두번째 item은 value를 수정하고, 컴포넌트를 새로고침할 때 쓰는 함수다. 

그리고 여기선 state로써 mimutes 라는 값을 가지고 있는데, 
우리가 할 건 이 minutes 값을 input의 value로 넣어주는것이다. 
그럼 input의 value는 state의 value와 같아지는 셈이다. 

그리고 이젠 input의 변화가 생길때마다 그 변화를 리스닝 하려고 한다. 
여기서 변화는, 사용자가 input에 뭔가를 입력하는것을 말한다. 
그것을 위해 onChange를 통해 이벤트를 리스닝하고 있다. 

이제 input에 변화가 생기면, onChange 함수를 실행시켜줄거다. 
그리고 일단은 onChange 함수는 그냥 
console.log("Somebody Wrote"); 를 실행시켜주고 있다. 
그리고 Minutes input에 뭔가를 입력할 때 마다 
"Somebody Wrote" 가 콘솔창에 잘 출력이 되는걸 볼 수 있다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/29f07090-09c3-48b6-9221-7060ab29c02e/Untitled.png)

이제 난 이 input의 입력값을 알고 싶다. 
왜냐면 우리가 입력한 분단위의 값을 시간단위로 변경시키려면 
일단 분단위값에 얼마를 입력했는지 알아야 그걸 가지고 뭘 지지고볶고 할것이 아닌가. 

React의 한가지 좋은점중 하나는 거의 일반적인 Javascript 와 같다는 점이다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eddf3fe9-9bef-453b-9d57-aa6f63c7913c/Untitled.png)

```jsx
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
    function App() {
        const [minutes, setMimutes] = React.useState();
        const onChange = (event) => {
            console.log(event);
        }
        return (
            <div>
                <h1 className="title">Super Converter</h1>
                <label htmlFor="minutes">Minutes</label>
                <input 
                    value={minutes}
                    id="minutes" 
                    placeholder="Minutes" 
                    type="number" 
                    onChange={onChange}
                />
                <label htmlFor="hours">Hours</label>
                <input id="hours" placeholder="Hours" type="number" />
            </div>
        );
    }
    ReactDOM.render(<App/>, root);
</script>
</html>
```

위처럼 onChange 함수의 인자로 event 를 해주면 Synthetic Event 라는게 뜬다. 
이런게 왜 뜨냐면 React JS는 가짜 event를 발생시킨다. 

왜냐면 리액트는 event를 최적화 시키기 때문이다. 
하지만 내가 원래의 event를 얻고싶다면 
Synthetic Event 객체안에 nativeEvent 라는 프로퍼티를 통해서 얻을 수 있다. 
(nativeEvent === native Javascript Event)

Synthetic(합성) 이라는 말이 붙어서 뭔가 싶지만 사실 요지는 내가 event에 접근할 수 있다는 것이고
또한 Synthetic Event 객체 안에 target을 가지고 있다는 것이다. 
이 tartget 프로퍼티는 방금 바뀐 input 을 말하고
target 안의 value 값을 통해 내가 입력한 값을 추출할 수 있다. 

자 그러믄 아래코드처럼 event.target.value 를 통해서 내가 입력한 값을 얻을 수 있겠다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d336f26a-2e0a-44fd-8503-c8f316c72459/Untitled.png)

```jsx
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
    function App() {
        const [minutes, setMimutes] = React.useState();
        const onChange = (event) => {
            console.log(event.target.value);            
								**<- evetn.target.value 를 통해 입력한 값을 추출**
        }
        return (
            <div>
                <h1 className="title">Super Converter</h1>
                <label htmlFor="minutes">Minutes</label>
                <input 
                    value={minutes}                 
									**<- input 값을 외부에서도 수정해주기 위해서 value값에도 minutes 를 넣어줌. 
                      에를들면 reset 버튼을 눌렀을 때 input안의 값도 reset이 되게한다던지.**

										id="minutes"                        
                    placeholder="Minutes" 
                    type="number" 
                    onChange={onChange}
                />
                <label htmlFor="hours">Hours</label>
                <input id="hours" placeholder="Hours" type="number" />
            </div>
        );
    }
    ReactDOM.render(<App/>, root);
</script>
</html>
```

이게 리액트에서 form을 다루는 방법이다. 

자 이제 value를 가지고 있으니 이걸 minutes에 넣어줄거다. 
그리고 state data 를 업데이트하는 방법은 setState 함수를 사용하는것이다. 
그러니 나는 setMinutes() 함수를 사용하여 값을 바꿔주면 된다.


# # State Practice part One

input 의 value 가 state의 데이터 일 때 
즉,

```jsx
<input 
    value={minutes}                 
    id="minutes"                    
    placeholder="Minutes" 
    type="number" 
    onChange={onChange}
/>
```

일 때 input 박스 안의 값을 입력하여 변경시키기 위해서는 
1. eventListener 를통해 event를 들어주는것
2. event 발생 시 값을 업데이트해주고(setState), UI에 보여주는것
둘다 필요하다. 

만일 하나라도 없다면 백날천날 input 박스안에 값을 입력해도 어떠한 값도 UI상에 보여지지 않는다. 
왜냐하면 input의 value는 state의 data 인데 그 data는 setState()함수를 통해서만 변경되기 때문이다. 
setState()함수를 사용하여 변경하지 않다면 default값으로만 계속 유지가 된다. 

자 위의 두가지를 만족시키도록 아래처럼 코드를 작성하였고 
현재 통제되는(controlled) input을 가지고 있고, event도 리스닝하고 있다.

```jsx
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
    function App() {
        const [minutes, setMimutes] = React.useState(0);
        const onChange = (event) => {
            setMimutes(event.target.value);
        }
        return (
            <div>
                <h1 className="title">Super Converter</h1>
                <label htmlFor="minutes">Minutes</label>
                <input 
                    value={minutes}
                    id="minutes" 
                    placeholder="Minutes" 
                    type="number" 
                    onChange={onChange}
                />
                <label htmlFor="hours">Hours</label>
                <input id="hours" placeholder="Hours" type="number" />
            </div>
        );
    }
    ReactDOM.render(<App/>, root);
</script>
</html>
```

자 이제 hours input도 통제되도록 만들것인데 
hours input의 value 또한 mimutes를 주어서 
state인 minutes를 값으로 리스닝하는 두개의 input을 만들어주었다. 
자 이렇게 해주면 Minutes input의 값을 고쳐줄 때마다 Hours도 똑같이 고쳐지는걸 볼 수 있다. 

하지만 아직 Hours의 값을 시간에대한 값으로 고칠 순 없지. 
왜냐하면 onChange event에 대한 설정을 안해줬기 때문이다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ccf20a34-a361-4a19-9a7a-45495b03be13/Untitled.png)

```jsx
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
    function App() {
        const [minutes, setMimutes] = React.useState(0);
        const onChange = (event) => {
            setMimutes(event.target.value);
        }
        return (
            <div>
                <h1 className="title">Super Converter</h1>
                <div>
                    <label htmlFor="minutes">Minutes</label>
                    <input 
                        value={minutes}
                        id="minutes" 
                        placeholder="Minutes" 
                        type="number" 
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label htmlFor="hours">Hours</label>
                    <input 
                        value={minutes}
                        id="hours" 
                        placeholder="Hours" 
                        type="number" 
                    />
                </div>
            </div>
        );
    }
    ReactDOM.render(<App/>, root);
</script>
</html>
```

자 이제 거의 끝났다. 
이제 분을 시단위로 고쳐주는 공식만 알아보면 된다. 
아주 간단하지. 
60으로 나눠주면 되지. 
아주 완벽하게 동작하는것을 볼 수 있다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d706fb87-513a-4a6f-a993-a59de675f2b3/Untitled.png)

```jsx
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
    function App() {
        const [minutes, setMimutes] = React.useState(0);
        const onChange = (event) => {
            setMimutes(event.target.value);
        }
        return (
            <div>
                <h1 className="title">Super Converter</h1>
                <div>
                    <label htmlFor="minutes">Minutes</label>
                    <input 
                        value={minutes}
                        id="minutes" 
                        placeholder="Minutes" 
                        type="number" 
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label htmlFor="hours">Hours</label>
                    <input 
                        value={minutes/60}
                        id="hours" 
                        placeholder="Hours" 
                        type="number" 
                    />
                </div>
            </div>
        );
    }
    ReactDOM.render(<App/>, root);
</script>
</html>
```

정리하자면 state를 60으로 나눠서 보여주는것이다. 
그리고 이 state는 onChange() 함수에서 바꿔주고 있기 때문에 
setMimutes() 함수를 통해서 새로 업데이트 된 값을 가지고, 이 모든 코드가 다시 한번 rendered 되는 것이다. 

그리고 우리는 마법의 리액트를 쓰기 때문에 HTML 전체가 업데이트 되는게 아니라 
Minutes와 Hours의 value 값만 업데이트가 되는것이다. 

추가적으로 reset 버튼을 만들어서 reset 버튼을 누르면 0으로 값이 바뀌게 만들고
또한 Hours input에 disabled 속성을 추가하여 아예 값 입력이 안되도록 만들어 주었다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e9e30041-4b22-4e1e-be07-0706363d2797/Untitled.png)

```jsx
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
    function App() {
        const [minutes, setMimutes] = React.useState(0);
        const reset = () => {
            setMimutes(0);
        }
        const onChange = (event) => {
            setMimutes(event.target.value);
        }
        return (
            <div>
                <h1 className="title">Super Converter</h1>
                <div>
                    <label htmlFor="minutes">Minutes</label>
                    <input 
                        value={minutes}
                        id="minutes" 
                        placeholder="Minutes" 
                        type="number" 
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label htmlFor="hours">Hours</label>
                    <input 
                        value={minutes/60}
                        id="hours" 
                        placeholder="Hours" 
                        type="number" 
                        disabled
                    />
                </div>
                <button onClick={reset}>reset</button>
            </div>
        );
    }
    ReactDOM.render(<App/>, root);
</script>
</html>
```

자 이제 Minutes input 박스에만 뭔가를 쓸 수 있고 
Hours input 박스는 클릭이 안되서 아무것도 못쓴다.


# # State Practice part Two

단위 변환을 뒤집어보는 함수(flip_function)을 만들어볼것이다. 
일단 동작을 위한 버튼을 만들고 상태감지를 위해 flip이라는 새로운 state를 만들고 
flip state를 컨트롤하기위한 onFlip 이라는 함수를 만들어 준다. 

그리고 만약 이 onFlip 효과를 가진 버튼이 눌리게 되면 
flip state의 값이 true <-> false 가 변환되게 할 것이다.

```jsx
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
    function App() {
        const [minutes, setMimutes] = React.useState(0);
        const [flipped, setFlipped] =React.useState(false);
        const reset = () => {
            setMimutes(0);
        }
        const onChange = (event) => {
            setMimutes(event.target.value);
        }
        const onFlip = () => setFlipped(!flipped);
        return (
            <div>
                <h1 className="title">Super Converter</h1>
                <div>
                    <label htmlFor="minutes">Minutes</label>
                    <input 
                        id="minutes" 
                        placeholder="Minutes" 
                        type="number" 
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label htmlFor="hours">Hours</label>
                    <input 
                        value={minutes/60}
                        id="hours" 
                        placeholder="Hours" 
                        type="number" 
                        disabled
                    />
                </div>
                <button onClick={reset}>Reset</button>
                <button onClick={onFlip}>Flip</button>
            </div>
        );
    }
    ReactDOM.render(<App/>, root);
</script>
</html>
```

자 위의 코드를 통해서 하고있는건 
현재 state를 바탕으로 새로운 state를 계산해내는 것이다. 

하지만 전에 봤듯이 다음 state의 계산을 변수에 할당된 값을 바탕으로 하는 건 좋지 못하다. 
(변수의 값은 다른 요인으로 인해 실수로 바뀔수도 있기 때문)
그러니 setFlipped 함수안에 새로운 함수의 첫번째 인자는 현재 state 값이라는걸 이용하여 그 결과를 반대로 도출하라고 명령해주면 된다. 
*(아래의 코드 참고)*

```jsx
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
    function App() {
        const [minutes, setMimutes] = React.useState(0);
        const [flipped, setFlipped] =React.useState(false);
        const reset = () => {
            setMimutes(0);
        }
        const onChange = (event) => {
            setMimutes(event.target.value);
        }
        const onFlip = () => setFlipped(current => !current); 
																						**<- 함수의 인자로 state 변경 활용** 
        return (
            <div>
                <h1 className="title">Super Converter</h1>
                <div>
                    <label htmlFor="minutes">Minutes</label>
                    <input 
                        id="minutes" 
                        placeholder="Minutes" 
                        type="number" 
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label htmlFor="hours">Hours</label>
                    <input 
                        value={minutes/60}
                        id="hours" 
                        placeholder="Hours" 
                        type="number" 
                        disabled
                    />
                </div>
                <button onClick={reset}>Reset</button>
                <button onClick={onFlip}>Flip</button>
            </div>
        );
    }
    ReactDOM.render(<App/>, root);
</script>
</html>
```

Flip 이라는 버튼을 만들고 flipped 라는 state를 만들어서 state의 value를 true <-> false 로 변환되게 만들어주었다. 
그 이유가 무엇일까? 
input 박스의 disabled 를 이 true 와 false 를 통해 제어할 수 있기 때문이다.

```jsx
<input 
    value={minutes/60}
    id="hours" 
    placeholder="Hours" 
    type="number" 
    disabled={true or false}
/>
```

이렇게 disabled 값이 true냐 false냐에 따라 disabled 가 적용이 되냐 안되냐를 결정된다. 
이것은 아주 반가운 뉴스다. 
왜냐하면 이제 state 값으로 input을 enabled 할지 disabled 할지 결정할 수 있기 때문이다. 

그 말은 즉, filpped 가 false 이면, Hours 는 disabled 되어야한다는 뜻이다. 
다시 말하면, flipped 가 false 라면, Hours의 disabled 는 true 가 되어야 하는거다. 

또한 flipped 가 true 이면, Minutes 는 disabled 되어야한다는 뜻이다. 
즉, flipped 가 true 이면, Minutes의 disabled는 true가 되어야 한다는 뜻이다. 

그렇다면 아래의 코드로 표현할수 있겠다.

```jsx
<input 
    value={minutes/60}
    id="hours" 
    placeholder="Hours" 
    type="number" 
    disabled={flipped === false}
/>

<input 
    id="minutes" 
    placeholder="Minutes" 
    type="number" 
    onChange={onChange}
     disabled={flipped === true}
/>
```

전체 코드는 아래와같으며 또한 아래의 이미지처럼 
Flip 버튼을 클릭하면 input 박스의 disabled 상태가 Minutes와 Hours 를 번갈아 가면서 나타난다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4dabbfef-3535-44fb-bae2-49ad2ad122e7/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9d1bc964-4633-45be-80bb-527b4bb00618/Untitled.png)

```jsx
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
    function App() {
        const [minutes, setMimutes] = React.useState(0);
        const [flipped, setFlipped] =React.useState(false);
        const reset = () => {
            setMimutes(0);
        }
        const onChange = (event) => {
            setMimutes(event.target.value);
        }
        const onFlip = () => setFlipped(current => !current);
        return (
            <div>
                <h1 className="title">Super Converter</h1>
                <div>
                    <label htmlFor="minutes">Minutes</label>
                    <input 
                        id="minutes" 
                        placeholder="Minutes" 
                        type="number" 
                        onChange={onChange}
                        disabled={flipped === true}
                    />
                </div>
                <div>
                    <label htmlFor="hours">Hours</label>
                    <input 
                        value={minutes/60}
                        id="hours" 
                        placeholder="Hours" 
                        type="number" 
                        disabled={flipped === false}
                    />
                </div>
                <button onClick={reset}>Reset</button>
                <button onClick={onFlip}>Flip</button>
            </div>
        );
    }
    ReactDOM.render(<App/>, root);
</script>
</html>
```

이런식으로 prop(disabled가 prop중 하나잔어 id도 prop이고 type도 prop 이고)
을 전달할수도 있다. 

하지만 사실 이건 true냐 false냐로 평가하는 일반적인 JS 코드다. 
이건 그냥 JS코드를 사용할 수 있다는 예시이고 사실 더 짧게 표현하고 싶다면 
아래처럼만 해줘도 된다.

```jsx
(긴 버전)
<input 
    value={minutes/60}
    id="hours" 
    placeholder="Hours" 
    type="number" 
    disabled={flipped === false}
/>

<input 
    id="minutes" 
    placeholder="Minutes" 
    type="number" 
    onChange={onChange}
     disabled={flipped === true}
/>

(짧은 버전)
<input 
    value={minutes/60}
    id="hours" 
    placeholder="Hours" 
    type="number" 
    disabled={flipped}
/>

<input 
    id="minutes" 
    placeholder="Minutes" 
    type="number" 
    onChange={onChange}
     disabled={!flipped}
/>
```

자 이제 Hours input의 change event를 리스닝 할 것이다. 
왜냐하면 flip을 하고 enabled 된 Hours에 아직 아무것도 쓸 수 없기 때문이다. 

**1. 일단 뭔가 입력되어 변화가 있을 때를 감지하기 위해 onChange 함수를 통해 입력값을 받아줄 수 있게 해준다. 
2. Hours의 value는 flipped 의 값에 따라 그대로 입력값을 받을지 아니면 Minutes input의 값에 따라 계산된 결과를 보여줄지 정해준다.
3. Mintes의 value 또한 flipped의 값에 따라 2.처럼 다르게 동작하도록 정해준다.**


# # 복습 및 예제

KmToMiles 를 변환해주는 똑같은 변환기를 만들고 
선택을 통해 KmtoMiels & MinutesToHours 중 하나를 페이지에 띄워서 사용할 수 있는 어플리케이션을 만들어보아라.

```jsx
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
    function MinutesToHours() {
        const [minutes, setMimutes] = React.useState(0);
        const [flipped, setFlipped] =React.useState(false);
        const reset = () => {
            setMimutes(0);
        }
        const onChange = (event) => {
            setMimutes(event.target.value);
        }
        const onFlip = () => {
            reset();
            setFlipped(current => !current);
        }
        return (
            <div>
                <div>
                    <label htmlFor="minutes">Minutes</label>
                    <input 
                        value={flipped ? minutes*60 : minutes}
                        id="minutes" 
                        placeholder="Minutes" 
                        type="number" 
                        onChange={onChange}
                        disabled={flipped}
                    />
                </div>
                <div>
                    <label htmlFor="hours">Hours</label>
                    <input 
                        value={flipped ? minutes : minutes/60}
                        id="hours" 
                        placeholder="Hours" 
                        type="number" 
                        disabled={!flipped}
                        onChange={onChange}
                    />
                </div>
                <button onClick={reset}>Reset</button>
                <button onClick={onFlip}>{flipped ? "Turn back" : "Invert"}</button>
            </div>
        );
    }
    function KmToMiles() {
        const [length, setLength] = React.useState(0);
        const [select, setSelect] = React.useState(true);
        const onChange = (event)=>{
            setLength(event.target.value);
        }
        const onReset = ()=>{
            setLength(0);
        }
        const onSelect = ()=>{
            setSelect(!select);
            onReset();
        }
        return(
            <div>
                <div>
                    <h2>KM 2 Miles</h2>
                    km    
                    <input
                        id="Km"
                        value={select === true ? length : length/0.621371}
                        onChange={onChange}
                        disabled={!select}
                    />
                </div>
                <div>
                    mile
                    <input
                        id="Mile"
                        value={select === true ? length*0.621371 : length}
                        onChange={onChange}
                        disabled={select}
                    />
                </div>
                <button onClick={onReset}>Reset</button>
                <button onClick={onSelect}>{select === true ? "Invert" : "Turn back"}</button>
            </div>
            
        );
    }
    function App() {
        const [index, setIndex] = React.useState("1");
        const onSelect = (event)=>{
            setIndex(event.target.value);
        };
        return (
            <div>
                <h1>Super Converter</h1>
                <select
                    value={index}
                    onChange={onSelect}
                >
                    <option value="0">Minutes & Hours</option>
                    <option value="1">Km & Miles</option>
                </select>
                <hr/>
                {index === "0" ? <MinutesToHours/> : null}
                {index === "1" ? <KmToMiles/> : null}
            </div>
        )
    }
    ReactDOM.render(<App/>, root);
</script>
</html>
```


# # Props

```jsx
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
    function MinutesToHours() {
        const [minutes, setMimutes] = React.useState(0);
        const [flipped, setFlipped] =React.useState(false);
        const reset = () => {
            setMimutes(0);
        }
        const onChange = (event) => {
            setMimutes(event.target.value);
        }
        const onFlip = () => {
            reset();
            setFlipped(current => !current);
        }
        return (
            <div>
                <div>
                    <label htmlFor="minutes">Minutes</label>
                    <input 
                        value={flipped ? minutes*60 : minutes}
                        id="minutes" 
                        placeholder="Minutes" 
                        type="number" 
                        onChange={onChange}
                        disabled={flipped}
                    />
                </div>
                <div>
                    <label htmlFor="hours">Hours</label>
                    <input 
                        value={flipped ? minutes : minutes/60}
                        id="hours" 
                        placeholder="Hours" 
                        type="number" 
                        disabled={!flipped}
                        onChange={onChange}
                    />
                </div>
                <button onClick={reset}>Reset</button>
                <button onClick={onFlip}>{flipped ? "Turn back" : "Invert"}</button>
            </div>
        );
    }
    function KmToMiles() {
        const [length, setLength] = React.useState(0);
        const [select, setSelect] = React.useState(true);
        const onChange = (event)=>{
            setLength(event.target.value);
        }
        const onReset = ()=>{
            setLength(0);
        }
        const onSelect = ()=>{
            setSelect(!select);
            onReset();
        }
        return(
            <div>
                <div>
                    <h2>KM 2 Miles</h2>
                    km    
                    <input
                        id="Km"
                        value={select === true ? length : length/0.621371}
                        onChange={onChange}
                        disabled={!select}
                    />
                </div>
                <div>
                    mile
                    <input
                        id="Mile"
                        value={select === true ? length*0.621371 : length}
                        onChange={onChange}
                        disabled={select}
                    />
                </div>
                <button onClick={onReset}>Reset</button>
                <button onClick={onSelect}>{select === true ? "Invert" : "Turn back"}</button>
            </div>
            
        );
    }
    function App() {
        const [index, setIndex] = React.useState("1");
        const onSelect = (event)=>{
            setIndex(event.target.value);
        };
        return (
            <div>
                <h1>Super Converter</h1>
                <select
                    value={index}
                    onChange={onSelect}
                >
                    <option value="0">Minutes & Hours</option>
                    <option value="1">Km & Miles</option>
                </select>
                <hr/>
                {index === "0" ? <MinutesToHours/> : null}
                {index === "1" ? <KmToMiles/> : null}
            </div>
        )
    }
    ReactDOM.render(<App/>, root);
</script>
</html>
```

위처럼 이전에 MinutesToHours 컴포넌트의 로직을 이용해 KmToMiles 컴포넌트를 만들었고 
이 2개의 컴포넌트를 렌더링하는 부모컴포넌트인 App 컴포넌트를 만들었다. 

자 이제 Props에 대해 배울것이다. 
Props는 일종의 방식이다. 
부모 컴포넌트로부터 자식 컴포넌트에 데이터를 보낼 수 있게 해주는 방법이다. 

위의 예시는 별로 부모,자식 컴포넌트끼리 상관이 없어보이니 
부모 컴포넌트로부터 자식 컴포넌트로 데이터를 보내기 위한 새로운 예시를 또 만들어 볼것이다. 

아래처럼 똑같은 스타일의 버튼인데 그안의 텍스트만 다른 컴포넌트를 두개 만들었다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/83a82748-f257-4d4b-b15e-7c23eb9201d0/Untitled.png)

```jsx
<!DOCTYPE html>
<html lang="en">
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script> 
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    function SaveBtn(){
        return (
            <button
                style={{
                    backgroundColor:"tomato",
                    color:"white",
                    padding:"10px 20px",
                    border:0,
                    borderRadius:10,
                }}
            >
                Save Button
            </button>
        )
    }
    function ConfirmBtn(){
        return (
            <button
                style={{
                    backgroundColor:"tomato",
                    color:"white",
                    padding:"10px 20px",
                    border:0,
                    borderRadius:10,
                }}
            >
                Comfirm Button
            </button>
        )
    }
    function App(){
        return(
            <div>
                <SaveBtn/>
                <ConfirmBtn/>
            </div>
        )
    }
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
</script>
</html>
```

무엇을 하고싶나? 
앞으로 100개의 버튼을 만들어야하고 저 style을 계속해서 재사용해야 하면서 텍스트만 바뀌도록 해야한다면 
그리고 나중에 스타일은 똑같이 유지되게 변경을 해야한다면,
스타일은 그대로 유지가되는데 텍스트만 따로 입력해줘서 설정이 가능한 하나의 컴포넌트를 만들고 싶지 않은가? 
그렇다면 재사용성과 추후 유지/보수에 있어서 훨씬 뛰어날것이라고 생각하지 않는가? 

이렇듯 이번시간에는 이 컴포넌트들을 좀 더 설정 가능하게끔 만드는것을 목표로 공부해볼것이다. 

일단 <Btn/> 이라는 하나의 컴포넌트로 만든 뒤

```jsx
function App(){
    return(
        <div>
            <Btn happy="Save Changes"/>
            <Btn happy="Continue"/>
        </div>
    )
}
```

위처럼 부모컴포넌트 App()에서 "happy" 라는 Prop에 문자열을 담아주면 
자식 컴포넌트의 함수가 인자로 받을 수 있다. 
리액트가 넣어주는거다. 

아래처럼 props라는 인자로(이름은 내맘대로 지어도 됨) 부모컴포넌트로부터 전달 받는 프로퍼티인것이다. 
그래서 어떤 prop이든 내가 Btn 컴포넌트에 넣어서 보내면 그것들은 Btn 함수의 첫 번쨰 argument(인자) 속으로 들어갈것이다. 

따라서 아래처럼 내가 보내준 props를 console.log(props); 해보면 
<Btn/>을 통해 보내준 happy들을 볼 수 있다. 
(두개가 콘솔창에 뜬건 당연히 Btn 2개 렌더링하고있으니까)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/afc35a2d-319d-4480-919f-d596c713b6f8/Untitled.png)

```jsx
<!DOCTYPE html>
<html lang="en">
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script> 
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    function Btn(props){
        console.log(props);
        return (
            <button
                style={{
                    backgroundColor:"tomato",
                    color:"white",
                    padding:"10px 20px",
                    border:0,
                    borderRadius:10,
                }}
            >
                Save Button
            </button>
        )
    }
    function App(){
        return(
            <div>
                <Btn happy="Save Changes"/>
                <Btn happy="Continue"/>
            </div>
        )
    }
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
</script>
</html>
```

그러므로, 여기서 내가 하고있는 것은, Btn 이라는 이름의 function을 부르고 있는 것뿐이고,
그리고 정보를 이 Btn함수에 전송하고 있는 것이다. 

그리고 React.js가 
<Btn happy="Save Changes"/> 
이 부분에서 실제로 하는 작업은 Btn() 이렇게 함수를 호출해서 
내가 넣어준 모든것들(happy등등 뭐 내가 넣을 속성들)을 첫 번쨰 인자로서 넣어준것이다. 

Btn({happy:"Save Changes"}) 뭐 이런식인거지. 

정리하자면 ReactJS는 자동으로 내가 <Btn/>에 넣은 모든 property(prop) 들을 모두 오브젝트화하여 Btn 함수의 첫번째 인자로 전달한것이다. 
(두번쨰 인자는 없다.)

자 그렇다면 "props.happy" 를 통해서 컴포넌트안의 텍스트 값을 아래처럼 변경할 수 있겠다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ff303922-b367-4046-966f-6ef2e7e540eb/Untitled.png)

```jsx
<!DOCTYPE html>
<html lang="en">
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script> 
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    function Btn(props){
        console.log(props);
        return (
            <button
                style={{
                    backgroundColor:"tomato",
                    color:"white",
                    padding:"10px 20px",
                    border:0,
                    borderRadius:10,
                }}
            >
                {props.happy}
            </button>
        )
    }
    function App(){
        return(
            <div>
                <Btn happy="Save Changes"/>
                <Btn happy="Continue"/>
            </div>
        )
    }
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
</script>
</html>
```

보다시피 여기서 같은 Btn 컴포넌트를 사용하지만, 
이 버튼들은 App 컴포넌트에 의해 설정되고 있다. 

단 하나의 Btn 컴포넌트가 있지만 보이다시피 UI는 다르다. 
그야말로 재사용 가능하게 만들고 있는것이다. 

아래처럼 코드를 갼략화 할 수 있다.

```jsx
<!DOCTYPE html>
<html lang="en">
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script> 
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    function Btn({ happy, big }){
        return (
            <button
                style={{
                    backgroundColor:"tomato",
                    color:"white",
                    padding:"10px 20px",
                    border:0,
                    borderRadius:10,
                }}
            >
                {happy}
            </button>
        )
    }
    function App(){
        return(
            <div>
                <Btn happy="Save Changes" big={true}/>
                <Btn happy="Continue"/>
            </div>
        )
    }
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
</script>
</html>
```


# # Memo

props에 뭘 또 넣을 수 있는지 보쟈. 
이전의 예제에서 봤다시피 true, false, string 등등 뭐 이것저것 다 보냇는데 
내가 원한다면 function도 보낼 수 있다. 

지금부터 무엇을 해볼거냐면 Btn 컴포넌트에 onClick function을 달아주고 
이 onClick function은 내 App 컴포넌트에 있는 뭔가의 state를 바꾸게 될 것이다. 

내가 만든 컴포넌트 <Btn/> 에 넣은 onClick은 이벤트리스너가 아니다. 
실제 HTML 요소인 button에 "onClick" 을 넣으면 이벤트리스너지만 
내가 만든 컴포넌트 <Btn/> 에 넣는다면 이건 단지 하나의 prop 이다.

```jsx
<!DOCTYPE html>
<html lang="en">
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script> 
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    function Btn({ text, onClick }){
        return (
            <button
                onClick={onClick}
                style={{
                    backgroundColor:"tomato",
                    color:"white",
                    padding:"10px 20px",
                    border:0,
                    borderRadius:10,
                }}
            >
                {text}
            </button>
        )
    }
    function App(){
        const [value, setValue] = React.useState("Save Changes");
        const changeValue = () => setValue("Revert Changes")
        return(
            <div>
                <Btn text={value} onClick={changeValue}/>   
										**-> 그저 하나의 prop일뿐인 onClick**
                <Btn text={value}/>
            </div>
        )
    }
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
</script>
</html>
```

그러니 헷갈리지 않게 하기 위해 "onClick" 이라는 prop의 이름을 "changeValue" 로 바꾸고 
그렇다면 <Btn/> 안의 <button> 태그는 changeValue 라는 onClick 리스너를 가지게 된다. 

또한 이 이벤트리스너는 잘 동작하여 왼쪽버튼을 클릭하면 버튼안의 텍스트가 
"save Change" -> "Revert Change"
로 잘 바뀌는것을 볼 수 있다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8af33b04-900a-4af8-9389-751aeb966273/Untitled.png)

```jsx
<!DOCTYPE html>
<html lang="en">
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script> 
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    function Btn({ text, changeValue }){
        return (
            <button
                onClick={changeValue}
                style={{
                    backgroundColor:"tomato",
                    color:"white",
                    padding:"10px 20px",
                    border:0,
                    borderRadius:10,
                }}
            >
                {text}
            </button>
        )
    }
    function App(){
        const [value, setValue] = React.useState("Save Changes");
        const changeValue = () => setValue("Revert Changes")
        return(
            <div>
                <Btn text={value} changeValue={changeValue}/>
                <Btn text={value}/>
            </div>
        )
    }
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
</script>
</html>
```

자 이번 예시를 통해서 부모컴포넌트가 자식컴포넌트에게 text, boolean 타입말고도 함수도 보낼 수 있다는것을 확인하였다. 

자 그렇다면 아래와 같이 App 컴포넌트안에 두개의 Btn 컴포넌트를 만든 뒤 
하나의 Btn 컴포넌트의 값만 바뀌도록 코드를 작성한다면 바뀌는 Btn 만 리렌더링 될까? 

아니다. 
두개의 Btn 모두 리렌더링 되는것을 콘솔창의 텍스트를 통해 확인할 수 있다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a81f3adc-c497-4df7-87ac-406d76ca7418/Untitled.png)

```jsx
<!DOCTYPE html>
<html lang="en">
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script> 
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    function Btn({ text, changeValue }){
        console.log(text + "was rendered");
        return (
            <button
                onClick={changeValue}
                style={{
                    backgroundColor:"tomato",
                    color:"white",
                    padding:"10px 20px",
                    border:0,
                    borderRadius:10,
                }}
            >
                {text}
            </button>
        )
    }
    function App(){
        const [value, setValue] = React.useState("Save Changes");
        const changeValue = () => setValue("Revert Changes")
        return(
            <div>
                <Btn text={value} changeValue={changeValue}/>
                <Btn text="Continue"/>
            </div>
        )
    }
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
</script>
</html>
```

왜냐하면 부모컴포넌트는 state의 변경을 겪는다. 그리고 이 state가 변경될 때 
그 부모 컴포넌트의 안에있는 모든 자식컴포넌트들 또한 같이 새로 그려지기 때문이다. 

아니 그렇다면 Btn Continue는 어떤 부분이 다시 그리는걸까? 
아니 왜 다시 그리는걸까?
뭐 딱히 바뀌는게 없는데도 말이다. 굳이 손해인데도? 

그래서 우리가 뭘 할 수 있냐면, 바로 React Memo 라고 불리는 걸 할 수 있다. 
(Memorize, 기억한다는 의미)

이것을 통해는 우리는 만약 prop이 변경되지 않는다면 이 컴포넌트가 다시 그려지는 것을 원치 않는다고 지시할 수 있다. 

사용방법은 아래처럼 React.memo(내가만든컴포넌트이름)
 -> const MemorizedBtn = React.memo(Btn) 

로 생성해줄 수 있고 MemorizedBtn 은 바로 memorized version의 Btn이 될 거다. 

그리고 아래처럼 부모컴포넌트(App) 안에서 이 MemorizedBtn 을 사용해주면 
변경되는 Btn만 리렌더링 되는것을 볼 수 있다.


# # Prop Types

Props Types에 대해서 공부해볼 것이다. 
왜냐하면 컴포넌트를 다룰 때 우리가 알아야만 하는 놈들 중 마지막 놈이기 때문이다. 

prop은 원하는 어떤 형태의 데이터든지 보낼 수 있게 해준다. 
(텍스트든 함수든 불린이든 뭐든 하여간 그냥 다.)

문제는 내가 컴포넌트들을 가지고 있는데, 그것들이 매우 많은 props를 가질 때 생긴다. 

때때로 내가 혹은 나의 팀원이 잘못된 prop을 전달한다던지하는 실수를 저지를 지도 모른다. 
예를들어 아래의 Btn 컴포넌트의 text prop에는 텍스트형식만 넣어줘야하는데 숫자를 넣어준다던지 말이다.

```jsx
function Btn({ text, changeValue }){
    console.log(text + "was rendered");
    return (
        <button
            onClick={changeValue}
            text="텍스트만들어가야함"
            style={{
                backgroundColor:"tomato",
                color:"white",
                padding:"10px 20px",
                border:0,
                borderRadius:10,
            }}
        >
            {text}
        </button>
    )
}
```

이러한 실수를 방지하기 위해 우리의 똑똑하신 React팀의 개발자들은 
PropType 이라는것을 만들었고 이것은 내가 어떤 타입의 prop을 받고 있는지를 체크해준다. 

일단 가져오기 위해

```jsx
<script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>
```

를 통해 가져오고 

가져온 뒤 ReactJS에게 나의 prop들의 타입이 무엇인지를 알려줄 것이다. 
왜냐면 아직 ReactJS는 prop들의 타입이 무엇인지 모르니까. 

하지만 내가 PropTypes를 설치함으로써 
아래와 같은 형식으로 컴포넌트의 prop들의 타입을 설정해주는것이 가능하다.

```jsx
Btn.PropTypes = {
    text: PropTypes.string,
    fontSize: PropTypes.number,
};
```

위처럼 컴포넌트의 타입을 설정해준다면 
애플리케이션을 실행시켰을 때 아래의 이미지처럼 에러는 아니고 경고가 콘솔창에 뜨는것을 볼 수 있다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5ccc909d-ca9e-4a5c-b1b3-e6b91cd891df/Untitled.png)

```jsx
<!DOCTYPE html>
<html lang="en">
<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script> 
<script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script> 
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    function Btn({ text, changeValue }){
        console.log(text + "was rendered");
        return (
            <button
                onClick={changeValue}
                style={{
                    backgroundColor:"tomato",
                    color:"white",
                    padding:"10px 20px",
                    border:0,
                    borderRadius:10,
                }}
            >
                {text}
            </button>
        )
    }           
    const MemorizedBtn = React.memo(Btn);
    Btn.propTypes = {
        text: PropTypes.string,      **<- text에는 문자를 받도록 설정**
    }
    function App(){
        const [value, setValue] = React.useState("Save Changes");
        const changeValue = () => setValue("Revert Changes")
        return(
            <div>
                <Btn text={13} changeValue={changeValue}/>  **<- text에 숫자줌**
                <Btn text="Continue"/>
            </div>
        )
    }
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
</script>
</html>
```

propTypes 는 다양한 방식으로 사용될 수 있다. 
데이터타입이 뭔지를 정해줄수도 있고(함수인지, 텍스트인지, 숫자인지, 불린인지...) 
특정 문자를 지정해줄수도있다.(텍스트인데 뭐 내가 지정한 텍스트들만 가능하게)
또한 .isRequired 를 통해 필수로 prop을 설정해주게 할수도 있다.(Proptypes.text.isRequired)
기타 뭐 설정해줄 수 있는 조건은 이것저것 많으니까 추후 필요에 따라 사용하면 된다. 

또한 prop에 default값 즉, 별도의 할당해주는 값이 없을때 기본값을 가지게 할 수도 있다. 
아래처럼 컴포넌트함수에서 값을 미리 지정해주면 된다.


# # Create React App (1)

create-react-app은 리액트 어플리케이션을 만드는 가장 좋은 방식이다. 
지금까지 만든 리액트 어플리케이션은 아래코드같은 스크립트를 import 함으로써 만들어졌다.

```jsx
<script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script> 
<script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script> 
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

하지만 create-react-app 을 사용한다면, ReactJS 어플리케이션을 만듦에 있어 훨씬 쉬워질 것이다. 
왜냐하면 create-react-app 은 엄청 많은 스크립트들과 많은 사전설정들을 나를 위해서 준비해주기 때문이다. 

예를들면, create-react-app 을 사용해서 어플리케이션을 만들면 개발서버에 접근한다든가, 
자동으로 새로고침을 시켜준다든가, 즉각적으로 어플리케이션 안에 CSS를 포함시켜 준다든가 하는 기능들이 있다. 

그리고, 내가 웹사이트를 publish 할 준비가 되면 create-react-app 은 publish 하는 명령어를 가지고 있다. 
코드를 압축하고, 좀 더 빠르게 만들어주고 하여간 그냥 아주 좋은놈이다. 
그래서 모두가 리액트 어플리케이션을 만들어야 할 때 create-react-app 을 사용한다.

### create-react-app 사용방법

1. npx create-react-app 프로젝트이름

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/790b8b4a-515f-432d-b234-69f6fbffa22b/Untitled.png)

설치가 완료된 후 내가 만든 프로젝트안의 package.json을 확인해보면(package.json 안에서 모든 스크립트들을 찾아낼 수 있다.)
scripts 안에 내가 실행할 수 있는 코드들이 있는것을 확인할 수 있다.

```jsx
{
    "name": "my-first-react-app",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
      "@testing-library/jest-dom": "^5.16.4",
      "@testing-library/react": "^13.3.0",
      "@testing-library/user-event": "^13.5.0",
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "react-scripts": "5.0.1",
      "web-vitals": "^2.1.4"
    },
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
    },
    "eslintConfig": {
      "extends": [
        "react-app",
        "react-app/jest"
      ]
    },
    "browserslist": {
      "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
      ]
    }
}
```

이중 start를 실행해보면 
$ npm run start 

developement server(개발용 서버)를 만들게 된다. 
그리고 자동으로 브라우저가 열리면서 아래와 같은 아주 멋진 페이지를 얻게 된다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4f38394f-cb13-4062-84f2-efcbf418d93b/Untitled.png)

이게 바로 내가 create-react-app 을 사용해서 어플리케이션을 만들었을 때 초기 버전이다. 

그 다음 이제 src 폴더를 볼 수 있는데,

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/32ea3313-fde9-4dc2-8e2b-ae9f976ae244/Untitled.png)

src 폴더는 내 모든 파일들을 넣을 폴더다. 

모든것이 다 src 폴더안에 있어야 한다. 
src 폴더는 많은파일들을 가지고 있지만, 무엇보다 중요한 건 바로 index.js 파일이다.

```jsx
(index.js)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

index.js 파일에서 익숙한 것들을 볼 수 있는데, 
ReactDOM 도 있고, document.getElementById 도 보인다. 

create-react-app은 나의 어플리케이션을 가지고 public 폴더안의 index.html에 넣어주도록 설정되어 있다.

```jsx
(index.html)

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <<body></body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
```

index.html안에는 id가 "root" 인 div태그가 있고 index.js에서 root 안에 내가 만든것들을 넣어주도록 설정되어있다. 
즉, 내가 손수 할 필요 없다. 이제는 이미 설정이 되어있는 것이다. 

src폴더 안에 있는 내 코드를 가져다가 이 페이지의 어딘가로 넣어줄 거란 말이다. 

또한 create-react-app 의 가장 큰 장점 중 하나는 코드를 수정하면 어플리케이션을 다시 실행할 필요 없이 
자동으로 브라우저에 업데이트 해준다는 점 이다. 
이것또한 아주 편리하다. 

이외에 뭐 특별한 건 없다. 
이제 나는 몇몇 설정을 지워줄것이다. 바닥부터 새로 시작하고 싶으니까. 

CSS 설정 지워주고, 감당할 수 없는 테스팅 뭐 이런거 다 지워주고 아주 심플하게 만들어줄것이다.

```jsx
(맨처음 index.js)
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

(지운 버전)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
```

또한 App.js 도 필요없는것들 다 지워주고 아주 씸플하게 만들어 줄 것이다.

```jsx
(기존 App.js)
function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  
  export default App;
  
(씸플 App.js)
function App() {
    return (
      <div>
        <h1>Welcome!!</h1>
      </div>
    );
  }
  
export default App;
```

App()은 단지 컴포넌트다. 하지만 내가 nodejs로 작업하고 있기 때문에 
파일들을 각각 분리시키는게 가능하고, 좀 더 조직적으로 구성할 수 있게 된 것이다. 

현재 한 파일당 한 컴포넌트를 가지고있고, index.js에서 그 컴포넌트들을 import 시키고 있다. 
추후 다른 컴포넌트들도 하나의 파일로 이루어지도록 구성할 것이다. 

기타 필요없는 파일들도 다 지워주면 된다. 
App.test.js, App.css, index.css, logo.svg, reportWebVitals.js, setupTests.js ... 

App.js와 index.js 만 남겨주면 된다. 
이제 아주 깔끔한 create-react-app 의 설치판을 얻게되었다. 

이제 나의 리액트 어플리케이션을 렌더링해줄 뿐인 index.js랑 Welcome!! 띄워주는 App.js 밖에 없다.

# # Create React App (2)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d65d730c-e9dd-457b-8870-34fb76381854/Untitled.png)

```jsx
(index.js)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

(App.js)
import Button from "./Button";

function App() {
  return (
    <div>
      <h1>Welcome!!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;

(Button.js)
function Button({text}) {
    return(
        <button>{text}</button>
    );
}

export default Button;
```

위와같이 Welcome 텍스트와 버튼을 브라우저에 출력해준 후 
propType 을 설정해주려 하는데 그러기 위해서는 npm을 통해 다운로드($npm i prop-types) 후 js파일에 import 해주면 된다. 
아주 간단하게 사용할 수 있다. 
(기존에는 script를 url을통해서 import 하였으나 이제 module을 사용)

```jsx
(Button.js)

import Proptypes from "prop-types"

function Button({text}) {
    return(
        <button>{text}</button>
    );
}

Button.Proptypes = {
    text: Proptypes.string.isRequired,
}

export default Button;
```

기존 create-react-app 을 사용하기 전과 동일한 코드를 사용한다. 
또한 props를 받아내는 방법도 똑같다. 

하지만 create-react-app 을 사용함으로서 서로 다른 파일들을 코드로 분할하는 등의 
작업을 할 수 있게 되었다. 

또한 좋은 기능중의 하나는 특정 컴포넌트를 위한 CSS파일을 만들 수 있다는 점 이다. 

자 일단 아래처럼 CSS파일을 만든 뒤 index.js에 CSS 파일을 import 해주면 
모든 button 태그는 토마토색을 가지게 된다.

```jsx
(styles.css)

button {
    background-color: tomato;
    color: white;
}

(index.js)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
```

create-react-app 으로 작업할 때의 포인트는 **"분할하고" "정복하는"** 것이다. 
그러기 위해서 있는 create-react-app 의 좋은 기능이 "CSS modules" 라는 것이다. 

이것을 사용하기 위해서 styles.css 파일의 이름을 바꿔줘야한다. 
**styles.css -> Button.module.css** 

그리고 Button.module.css 내에서 btn 이라는 클래스를 만들어 볼 거다.

```css
(Button.module.css)

.btn {
    background-color: tomato;
    color: white;
}
```

그리고 나는 Button.module.css 를 index.js에 import 하지 않을 것이다. 
대신에 이 CSS 파일을 Button.js에 import 시켜줄 것이다.

```jsx
(Button.js)

import Proptypes from "prop-types";
import styles from "./Button.module.css"

function Button({text}) {
    return(
        <button className={styles.btn}>{text}</button>
    );
}

Button.propTypes = {
    text: Proptypes.string.isRequired,
}

export default Button;
```

자 나는 Button.module.css 파일에 CSS 코드를 작성하였다. 
하지만 create-react-app은 이 CSS 코드를 javascript 오브젝트로 변환시켜준다. 
그리고 이 javascript 오브젝트는 btn을 안에 가지고 있는 것이다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a382f0e5-ab49-41a7-95bd-0b7d797c834b/Untitled.png)

그리고 위의 이미지에서 브라우저의 Elements 에서 볼수있다시피 
create-react-app은 무작위적인 랜덤 class를 갖는다는 걸 알 수 있다. 

즉, 무작위적인 class이름을 붙여줌으로서 특정 컴포넌트에만 스타일을 적용시켜줄 수 있고 
또한 동일한 class이름을, .btn을, 다른 파일 내에서도 사용할 수 있다. 

즉, 나의 style들도 modular가 될 수 있다는 것이다. 

어플리케이션을 위한 다른 CSS module을 만들어 볼 건데, 
어플리케이션을 위한 거니까 App.mudule.css 라고 이름을 지어줄 것이다. 
(이름은 중요하지 않다. 아무거나.module.css 형식만 유지해주면 된다.)

title을 꾸며주기 위한것이니 .title 이라는 클래스명으로 명시해주고 아래처럼 스타일을 입혀준다.

```css
(App.module.css)

.title {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18;
    color: red;
}
```

이제 이 스타일을 App.js에서 h1 태그에 import 해준 뒤 
styles 오브젝트의 title을 가져와서 h1에 넣어주면 된다.

```jsx
import Button from "./Button";
import styles from "./App.module.css";       **<- CSS파일 가져와서 styles에 받아주고** 

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome!!</h1> 
										**-> styles 오브젝트의 title을 클래스이름으로 지정해주면 된다.** 
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
```

지금은 이게 뭐가 좋은거지 싶지만 
이 방법이 훨씬 좋은 방법이다. 

내내 다른 클래스 이름들을 사용하기 위해 기억하고 있어야 했었지만 
이제는 다른 클래스 이름들을 기억할 필요가 없다. 

왜냐하면 create-react-app 이 그것들을 다 랜덤하게 바꿔줄 것이기 때문이다. 

결론적으로 이제 나는 컴포넌트를 분리해서 만들 수 있고, 
그 컴포넌트를 위한 CSS를 만들 수 있고, 

그 컴포넌트들과 CSS들은 독립적인 형태가 될것이다.


# # Effects Introduction

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8a3b59ff-5ff0-4dd7-993d-80e3a64c2fdd/Untitled.png)

```jsx
(App.js)

import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("render");
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
```

위의 코드는 아주 익숙하다. 
그냥 버튼 클릭하면 숫자 올려주는 코드다. 

위의 코드에서 하는것은 state를 사용하는것 뿐이다. 
value를 받아오고, value를 수정하기위해 function을 받아오고. 
이전 state를 받아다가 +1 값을 return 하는 function을 만들었고, 
그 값을 h1 태그를 통해 보여주었다. 
그리고 내가 state를 modify 할 수 있도록 하는 버튼이 있다. 

또한 버튼을 클릭할 때 마다 콘솔창에는 "render" 텍스트가 계속 출력된다. 
컴포넌트의 state가 변화하고, 그럴 때 마다 이 모든 App 컴포넌트가 다시 실행되는것이다.
(console.log("render") 도 같이 계속 재실행 되는거다.) 
아주 익숙한 현상이다. 

하지만 이제, 내가 해결해야하는 문제가 하나 있다. 
가끔은, 계속 다시 렌더링 될 때 마다 반복실행되어도 괜찮은 코드가 있을 수 있다. 
하지만 가끔은 그렇게 하지 않고, 컴포넌트가 처음 렌더링 될 때만 코드가 실행되길 원할 수도 있다. 

즉, 현재는 state가 변할 때마다 매번 console.log("render"); 가 실행되고 있지만 
첫 렌더링 할때만 코드가 실행되고, 다른 state 변화에는 실행되지 않도록 하고자 하는것이다. 

자 이제 어떻게 특정 코드들이 첫번째 컴포넌트 렌더링할때만 실행되게 아는지 알아보자.

# # useEffect

```jsx
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("render");
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
```

console.log("render");
를 첫 렌더링할때만 실행되고 이후 state 가 변경될때는 실행되지 않도록 코드를 수정해볼것이다. 

당연히 리액트개발팀은 이러한 기능을 미리 만들어 놓았고 그것은 바로 "useEffect" 이다. 

useEffect 는 두개의 인자를 가지는 function이다. 
첫번째 인자는 내가 딱 한번만 실행하고 싶은 코드가 될것이다.(함수만 받을수 있음.)
두번째는.. 조금이따 다시 알아볼것이다. 

```css
useEffect(처음한번실행할코드, [아직모르는 미지의 무언가]);
```

    -> 이렇게 쓴다. 

일단 state가 바뀔때마다 코드가 실행되는 문제를 해결해보고 그 다음에, 또 어떤 문제가 발생하는지 보고, 
그때 이 두번째 인자에 대해 얘기해보자.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d25b44d3-4dc4-45ef-9163-df468cfc14c8/Untitled.png)

```jsx
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  useEffect(()=>{console.log("render");}, [])
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
```

자 위처럼 useEffect 함수를 사용한 뒤 그 첫번째 인자로 실행시켜야할 코드를 주게 되면
컴포넌트를 처음 렌더링할 때만 코드를 실행시키고 
이 후 state 가 변경될 때는 코드가 실행되지 않는것을 볼 수 있다. 

자 이제 나는 reactJS가 나에게 언제 코드를 실행할지 안할지 결정할 tool을 제공한다는 걸 안다.

# # Deps

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9ae5edae-f610-441d-8201-74f78a8d337f/Untitled.png)

```jsx
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(()=>{console.log("Call the API");}, [])
  console.log("SEARCH FOR", keyword);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here.."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
```

이전에 해봤던대로 input을 만들고 event listener를 연결했고 
이 function이 작동할 때 argument로 event를 받았다. 

그리고 event를 발생시킨 input에서 value를 받아서, 그 value를 setKeyword함수를 사용하여 
keyword state에 넣어줬다. 
그리고 그 keyword를 가져와서, input의 value로 사용하면 내가 원할 때 이 input을 조작할 수 있게된다. 

그렇게 되면 내가 타이핑할 때 마다 state를 수정하고 있다. 

이번에 내가 하려는것은 검색이다. 
내가 이 검색창에 무언가를 썻을 때, 검색 API를 이용하는것이다. 
그런데, 저 Click me 버튼을 눌럿을 때 마저 검색 API를 호출하고싶지는 않다. 

즉, 나는 search keyword에 변화가 있을 때 만 검색 API를 호출하고 싶은것이다. 
(counter가 변화할 때에도 검색 API를 호출하고 싶지는 않다.
지금 보면 Click Me 버튼을 클릭해고 SEARCH FOR marvel 이 계속 뜬다.)

이제 나는 내 코드의 특정한 부분만이 변화했을 때, 
원하는 코드들을 실행할 수 있는 방법을 배우고 싶다. 

여기에서 useEffect의 마법을 배울거다.

```jsx
useEffect(()=>{
    console.log("SEARCH FOR", keyword);
},[keyword]);
```

자..이렇게 쓰면된다. 
이렇게 써주면, 이 'keyword' 가 변화할 때 첫번쨰인자의 함수를 실행할 거라고 react.js에게 알려주는것이다. 
그러면 counter가 변한다고, 즉 버튼 눌럿다고 console.log("SEARCH FOR", keyword); 이게 실행되진 않겠지. 
(console.log("SEARCH FOR", keyword) 이걸 검색 API를 호출하는 코드라고 생각하자)

그리고 이것이 저 useEffect()의 두번째 인자를 빈 배열로 주게되면 처음에 한번만 실행하는지를 설명해준다. 
뭐 아무것도 지켜보는게 없으니 한번만 실행되고 마는것이다. 
따라서 아래처럼 코드를 작성해주면 counter state가 변할때는 검색 API를 호출하지 않고 
오로지 keyword state가 변할때만 검색 API를 호출한다.

```jsx
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(()=>{console.log("Call the API");}, [])
  useEffect(()=>{
    console.log("SEARCH FOR", keyword);
  },[keyword]);     **<- keyword state가 변할때만 검색 API 호출**

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here.."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
```

하지만 나의 서치바는 아직 하나의 문제점을 가지고 있다. 고것은 바로 처음 렌더링할 때 
서치바에 아무값도 없을때에도 검색 API를 호출한다는 점이다. 

그부분은 useEffect() 함수안에 조건문을 써줌으로서 해결할 수 있다. 
글자가 5개 이상인경우에만 검색 API를 호출하는것으로 조건을 추가해보자.

```jsx
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(()=>{console.log("Call the API");}, [])
  useEffect(()=>{
    if(keyword.length > 5) {       **<- keyword 길이 조건 추가**
      console.log("SEARCH FOR", keyword);
    }
  },[keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here.."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
```

이제는 언제 코드가 실행될지 결정하는 방법을 배웠다. 
예를 들면 컴포넌트가 생성되는 첫 시작점이라던가, 아니면 무언가가 update 될 떄도 코드를 실행할 수 있다. 
그리고 특정한 state가 update 될 때만 코드를 실행할 수도 있다. 

또한 
useEffect(함수, [keyword, counter])
와 같은 방식으로 두번째 인자에 두개의 state 를 넣어주면 둘중에 하나만 변해도 함수를 실행시키도록 할 수 있다. 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
reactJS에서 가장 멋진 점은, 바로 컴포넌트를 refresh(새로고침) 한다는 점이다. 
새로운 데이터가 들어올 때 마다 UI를 refresh 한다. 
그래서 내가 직접 refresh 하지 않아도 되나까 아주아주 좋당. 

그리고 또 한가지, reactJS는 변화가 일어날 때만 refresh 한다는 것이다. 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



# # Cleanup

**Cleanup function_이라는걸 배워봅시다.**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/415bceba-3e94-42a2-b82a-3a06b4c85d95/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e3561f4-04ae-403d-947f-18a9201e7346/Untitled.png)

```jsx
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function Hello(){
  useEffect(()=>{
    console.log("I'm here");
  }, []);
  return <h1>Hello!</h1> 
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
```

위의 코드는 showing이라는 state의 변경을 통해 
Hello 컴포넌트를 보였다 숨겼다하는 어플리케이션이며 
Hello 컴포넌트안에서 useEffect를 통하여 처음 컴포넌트를 실행할 때 에만 "I'm here" 을 콘솔창에 출력하도록 기능한다. 

즉, console.log("I'm here"); 은 Hello 컴포넌트가 생성(Create)될때만 실행되는것이다. 

그런데 여기서 또 하나 배우고자 하는것은, reactJS가 할 수 있는 건데 
컴포넌트가 제거(destroy) 될 때도 코드를 실행할 수 있는것이다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8db4babc-2535-4391-86b3-4bdf057dfca2/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d614468f-0ecb-417c-8bf0-895c4da2d3fb/Untitled.png)

위의 브라우저상 Element 에서 보다시피 코드안에 아예 남아 있지 않고, 스크린에서도 없어진다. 
숨기는게 아니라 아예 태그를(컴포넌트를) 없애버리는것이다. 

정리하자면 create할 떄 useEffect 를 통해 function을 작동시키듯이, 
destroy 할 때도 function을 작동시켜보고 싶은것이다. 

사용방법은 아주 간단하다. 
dependency 가 없는 useEffect의 첫번째인자 함수의 return 값의 함수가 바로 destory될 때 작동되는 함수인것이다.

```jsx
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function Hello(){
  useEffect(()=>{
    console.log("Created :)")
    return () => console.log("Destroyed :(") **<- 컴포넌트가 destroyed 될 때 작동**
  }, []);

  return <h1>Hello!</h1> 
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
```

위의 방식을 통해 컴포넌트가 언제 create 되고, destory 되는지 알 수 있게 된다. 

이게 뭐 어떻게 돌아가는지 잘 이해가 안될수있지만, 잘게 쪼개서 생각해 보면 그렇게 어려운것도 아니다. 
위의코드와 아래의 코드는 똑같은 코드이다.

```jsx
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function Hello(){

  function Byfn(){
    console.log("By :(");
  }

  function Hifn(){
    console.log("Hi :)");
    return Byfn;    **<- Byfn(); 이렇게하면 안됌.**
  }

  useEffect(Hifn, []);

  return <h1>Hello!</h1> 
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
```

자세히 다시 한번 보면, 
useEffect는 function을 받고, 이 function은 dependency가 변화할 때 호출된다. 
위의 경우 dependency가 비어있으니까 컴포넌트가 처음 생성될 때 function이 호출된 후에 다시는 호출되지 않는다. 

이제. 컴포넌트가 파괴될 떄도 function을 실행하고싶으면, 나의 Hifn이 Byfn을 return 해야한다. 
react.js 가 Hifn을 실행할 거고, 컴포넌트가 파괴될 때 react.js 는 Hifn이 return 한 function을(Byfn) 실행할거다. 

이거다.. 
useEffect 는 굉장히 유용하다. 
useEffect 는 우리에게 언제 코드를 실행할지 선택권을 제공한다. 

우리는 시작할 때만 코드를 실행하게 할 수 있다는 걸 배웠고, 무언가 변화할 때 코드가 실행되도록 할 수도 있고, 
이번에는 컴포넌트가 파괴될 때 코드를 실행할 수 있다는 것도 배웠다. 

그런데 사실 아직 대부분의 개발자들은 이러한 Cleanup function을 잘 사용하진 않는다. 
보통은 useEffect 안에 모든것을 작성한다.
