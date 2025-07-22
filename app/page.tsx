import AuthLayout from "./(auth)/layout";
import Login from "./(auth)/login/page";
export default function Home() {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
}
