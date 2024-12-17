import FormWithoutReactHookForm from "@/components/FORMWITHOUTREACTHOOK";
import FormWithReactHookForm from "@/components/withreactHook";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-200 text-zinc-700">
      {/* <FormWithoutReactHookForm /> */}
      <h2 className="text-center font-bold mb-5 text-lg">
        With React Hook Form
      </h2>
      <FormWithReactHookForm />
      {/* <FormWithReactHookFormAndZod /> */}
      {/* <FormWithReactHookFormAndZodAndServer /> */}
    </main>
  );
}
