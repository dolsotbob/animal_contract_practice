// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const AnimalModule = buildModule("AnimalModule", (m) => {
    const dog = m.contract("Dog");
    const cat = m.contract("Cat");

    return { dog, cat };
});

export default AnimalModule;
