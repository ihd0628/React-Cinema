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
카운터를 만들어 보자. 

