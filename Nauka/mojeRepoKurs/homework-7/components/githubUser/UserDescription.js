export function UserDescription(user) {
  if (user.bio === null) {
    return "Description not provided";
  } else {
    return user.bio;
  }
}
