// styled-components Theme 를 확장하는 파일입니다.

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    pointColor: string;
  }
}
