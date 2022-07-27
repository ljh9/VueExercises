<script>
export default {
  props: {
    // 기본 타입 체크
    //  (`null`과 `undefined`는 모든 타입에서 허용된다)
    propA: Number,
    // 복수 타입 허용
    propB: [String, Number],
    // 필수 문자열
    propC: {
      type: String,
      required: true
    },
    // 기본 값을 갖는 숫자
    propD: {
      type: Number,
      default: 100
    },
    // 기본 값을 갖는 객체
    propE: {
      type: Object,
      // 객체 또는 배열 기본값은 팩토리 함수에서 반환되어야 한다.
      // 함수는 component가 인수로 받은 rawProps를 받는다.
      // rawProps는 부모 component에게서 받는 props 전체 객체
      default(rawProps) {
        return { message: 'hello' }
      }
    },
    // 사용자 정의 유효성 검사 함수
    propF: {
      validator(value) {
        // 값은 다음 문자열 중 하나와 일치해야 한다.
        return ['success', 'warning', 'danger'].includes(value)
      }
    },
    // 기본 값이 있는 함수
    propG: {
      type: Function,
      // 객체 또는 배열 기본값과 달리 이것은 팩토리 함수가 아니라
      // 기본값으로 사용하는 함수이다.
      default() {
        return 'Default function'
      }
    }
  }
}
</script>

<template>
    <div class="exercise">
        
    </div>
</template>