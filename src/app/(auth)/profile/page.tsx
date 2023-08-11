// import { useRouter } from 'next/router';
// import axios from 'axios';

// const ProfilePage = ({ user }) => {
//   const router = useRouter();
//   const { userId } = router.query;

//   if (!user) {
//     return <div>Not authorized</div>;
//   }

//   return (
//     <div>
//       <h1>Welcome, {user.name}</h1>
//       <p>Your email is {user.email}</p>
//     </div>
//   );
// };

// export async function getServerSideProps({ req, res, query }) {
//   const { userId } = query;

//   try {
//     const { data } = await axios.get(`
// https://reqres.in/api/users/$(userId)`);

//     if (!data.data.id) {
//       res.statusCode = 404;
//       return { props: { user: null } };
//     }
   
//     const { data: currentUser } = await axios.get('https://reqres.in/api/users/2', {
//           });

//     if (!data.data.id) {
//       res.statusCode = 403;
//       return { props: { user: null } };
//     }

//     return { props: { user: data.data} };
//   } catch (error) {
//     console.error(error);
//     res.statusCode = 500;
//     return { props: { user: null } };
//   }
// }

// export default ProfilePage;
export default function Profile(){
    return (
        <div>
          <h1>Welcome, </h1>
          <div>Your email is </div>
        </div>
      );
};
  

