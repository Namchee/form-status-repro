'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';

import { sampleAction } from '@/action/sample';

const SampleForm = () => {
  return (
    <form action={sampleAction}>
      <div>
        <label htmlFor="sample" className="block mb-1">
          Sample
        </label>
        <input
          type="text"
          id="sample"
          name="sample"
          className="border border-gray-200 rounded-md p-1 block"
        />
      </div>

      <Button />
    </form>
  );
};

const Button = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md"
    >
      {pending ? 'Loading...' : 'Submit'}
    </button>
  );
};

export default SampleForm;
