
 // SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract StudentRegistry {
    string private firstName;
    string private lastName;

    function setName(
        string memory _firstName,
        string memory _lastName
    ) public {
        firstName = _firstName;
        lastName = _lastName;
    }

    function getName()
        public
        view
        returns (string memory, string memory)
    {
        return (firstName, lastName);
    }
}
