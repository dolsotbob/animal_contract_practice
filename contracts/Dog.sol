// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Animal.sol"; // Animal 계약 가져오기

contract Dog is Animal {
    //생성자: 부모 계약의 생성자 호출 // "Dog"를 species로 설정함
    constructor() Animal("Dog") {}

    //오버라이딩: virtual 함수 재정의 // makeSound()함수를 오버라이딩하여 "Woof!"반환
    function makeSound() public view override returns (string memory) {
        return "Bark";
    }
}
