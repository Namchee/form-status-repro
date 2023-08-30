'use server';

import { sleep } from '@/utils/sleep';

export async function sampleAction() {
    await sleep(3000);

    console.log('I have woken up');

    return {
        status: 200,
    };
}