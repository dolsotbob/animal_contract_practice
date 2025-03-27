// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Animal.sol";

contract Cat is Animal {
    // 생성자: 부모 계약의 생성자 호출 // "Cat"을 species로 설정함
    constructor() Animal("Cat") {}

    //오버라이딩: virtual 함수 재정의 // makeSound()함수를 오버라이딩하여 "Meow"반환
    function makeSound() public view override returns (string memory) {
        return "Meow";
    }
}
