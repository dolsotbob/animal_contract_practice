import { expect } from "chai"; //chai: Solidity 스마트 컨트랙트를 테스트할 때 결과를 검증하기 위해 사용되는 테스트 라이브러리
import { ethers } from "hardhat"; //ethers: Hardhat에서 제공하는 Ethers.js 라이브러리로, 스마트 컨트랙트 배포 및 상호작용에 사용됨

//describe는 테스트 그룹을 정의하는 함수 
describe("Animal Contract Tests", function () {
    let Dog, dog: any;
    let Cat, cat: any;

    beforeEach(async function () {
        // Dog 컨트랙트 배포
        Dog = await ethers.getContractFactory("Dog");
        dog = await Dog.deploy(); //Dog 컨트랙트를 배포하고 dog 변수에 저장 

        // Cat 컨트랙트 배포
        Cat = await ethers.getContractFactory("Cat");
        cat = await Cat.deploy();
    });

    //expect(...).to.equal(...)은 chai의 검증 함수로 dog.species()의 반환값이 "Dog"와 같아야 테스트가 통과함
    it("Dog 컨트랙트가 'Dog'라는 종을 반환해야 함", async function () {
        expect(await dog.species()).to.equal("Dog");
    });

    it("Dog 컨트랙트의 makeSound()가 'Bark'를 반환해야 함", async function () {
        expect(await dog.makeSound()).to.equal("Bark");
    });

    it("Cat 컨트랙트가 'Cat'이라는 종을 반환해야 함", async function () {
        expect(await cat.species()).to.equal("Cat");
    });

    it("Cat 컨트랙트의 makeSound()가 'Meow'를 반환해야 함", async function () {
        expect(await cat.makeSound()).to.equal("Meow");
    });
});