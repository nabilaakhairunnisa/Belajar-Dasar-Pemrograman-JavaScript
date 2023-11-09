//...Immutability
//Objek tidak boleh diubah ketika sudah dibuat

//Tidak Efisien
const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const renameLastNameUser = (newLastName, user) => {
    user.lastName = newLastName;
}
renameLastNameUser('Potter', user);
console.log(user);

//Efisien
const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const createUserWithNewLastName = (newLastName, user) => {
    return { ...user, lastName: newLastName }
}
const newUser = createUserWithNewLastName('Potter', user);
console.log(newUser);

//...Baru
const ubahNamaBelakang = (namaBelakangBaru, user) => {
    return { ...user, lastName: namaBelakangBaru }
}
const userBaru = ubahNamaBelakang('Susan', user);
console.log(userBaru);