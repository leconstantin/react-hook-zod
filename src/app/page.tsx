import FormWithoutReactHookForm from "@/components/FORMWITHOUTREACTHOOK";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-200 text-zinc-700">
      <FormWithoutReactHookForm />
      {/* <FormWithReactHookForm /> */}
      {/* <FormWithReactHookFormAndZod /> */}
      {/* <FormWithReactHookFormAndZodAndServer /> */}
    </main>
  );
}
