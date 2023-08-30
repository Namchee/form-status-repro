'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';

import { sampleAction } from '@/action/sample';

const SampleForm = () => {
  const { pending } = useFormStatus();

  return (
    <form action={sampleAction}>
      <div>
        <input
          type="text"
          name="sample"
          style={{
            border: '1px solid #e2e8f0',
            borderRadius: '5px',
            padding: '4px',
          }}
        />
      </div>

      <button
        disabled={pending}
        style={{
          marginTop: '1.5rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          borderRadius: '5px',
        }}
      >
        {pending ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
};

export default SampleForm;
