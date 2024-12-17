import FormWithoutReactHookForm from "@/components/FORMWITHOUTREACTHOOK";
import FormWithReactHookFormAndZod from "@/components/reacthookZod";
import FormWithReactHookForm from "@/components/withreactHook";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-200 text-zinc-700">
      {/* <FormWithoutReactHookForm /> */}
      {/* <h2 className="text-center font-bold mb-5 text-lg">
        With React Hook Form
      </h2>
      <FormWithReactHookForm /> */}
      <h2 className="text-center font-bold mb-5 text-lg">
        With React Hook Form and Zod
      </h2>
      <FormWithReactHookFormAndZod />
      {/* <FormWithReactHookFormAndZodAndServer /> */}
    </main>
  );
}
