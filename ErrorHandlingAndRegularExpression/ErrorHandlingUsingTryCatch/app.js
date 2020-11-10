const user = { email: 'example@email.com' };

try {
  // Produce a Reference Error
  // myFunction();
  //  Produce a type error
  // null.myFunction();

  if (!user.name) {
    throw 'User has no name';
  }
} catch (error) {
  console.log(error);
  // console.log(error.message);
  // console.log(error.name);
} finally {
  console.log('Finally runs');
}
