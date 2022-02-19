## Question 1

```
<View style={styles.container}>
      <TouchableOpacity
        // react-native에서 touchableOpacity를 사용하는 이유 :
        // button은 android와 ios가 달라서 관리하는데 어려움이 있음.
        style={styles.numList}
        key={idx}
        onPress={() => props.delete(idx)}>
        <Text>{item}</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        // react-native에서 touchableOpacity를 사용하는 이유 :
        // button은 android와 ios가 달라서 관리하는데 어려움이 있음.
        style={styles.numList}
        key={idx}
        onPress={() => props.delete(idx)}>
        <Text>{item}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        // react-native에서 touchableOpacity를 사용하는 이유 :
        // button은 android와 ios가 달라서 관리하는데 어려움이 있음.
        style={styles.numList}
        key={idx}
        onPress={() => props.delete(idx)}>
        <Text>{item}</Text>
      </TouchableOpacity> */}
      {/* 이렇게 TouchableOpacity 여러 개 만드는것은 Illegal. key값은 unique 해야 함.  */}
    </View>
```

react-native 에서 이렇게 component 안에서 if 문같은 statement를 작성할 순 없는지.?<br/>
(원하는 구현: 2중 배열로 touchableOpacity를 만들기, <br/>
index의 value가 이모지이면, backgroundColor를 blue로 변경하기.)

---

## Question 2

```
const NumList = props => {
  return props.num.map((item, idx) => (
    // <View style={styles.container}>
    <View>
      <TouchableOpacity
        // react-native에서 touchableOpacity를 사용하는 이유 :
        // button은 android와 ios가 달라서 관리하는데 어려움이 있음.
        style={styles.numList}
        key={idx}
        onPress={() => props.delete(idx)}>
        <Text>{item}</Text>
      </TouchableOpacity>
    </View>
```

TouchableOpacity를 그냥 만들었을 때는 에러가 없는데, 이렇게 View 안에 넣어두면 다음과 같은 에러 발생. ... why?

![image](https://user-images.githubusercontent.com/72643027/154793877-122f0a7d-4352-4dad-9fb0-50642b1b76b6.png)

---
