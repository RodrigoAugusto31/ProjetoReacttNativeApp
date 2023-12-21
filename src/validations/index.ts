export function validateEmail(email: string): boolean {
    if(email.indexOf('@') === -1) {
      return false;  
    }

    if(email.indexOf('.com') === -1) {
        return false;
    }

    return true;
}
