
import { auth, db} from './config';

// Register new user 
export async function register(name, email, password) {
    const newUser = await auth.createUserWithEmailAndPassword(email, password);
    return await newUser.user.updateProfile({
        displayName : name
    })
}

// User login
export async function login(email, password) {
    console.log(email, password);
    return auth.signInWithEmailAndPassword(email, password);
}

// Close the user session
export async function closeSession() {
    await auth.signOut();
}


export async function fetchTaskList(userId, orden) {
    return  await new Promise ((resolve, reject)=> {
        db.collection("tasks-list").where("userId", "==", 'Izl50QIOFeeFxZbor1L8v5H388b2').get().then(function(querySnapshot) {
            let data = []
            querySnapshot.forEach(function(doc) {
                if (doc.exists) {
                    data.push({id: doc.id, data: doc.data()})
                    resolve({message: "ok", data})
                } else {
                    console.log("No such document!");
                }
            })
        })
    })
}
