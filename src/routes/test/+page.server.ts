import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { setTimeout } from "timers/promises";


export const load: PageServerLoad = async ({ locals }) => {


    const a = async () => {
        return await setTimeout(2000, "a");
    }
    const b = async () => {
        return await setTimeout(2000, "b");
    }
    const c = async () => {
        return await setTimeout(3000, "c");
    }

    return {
        a: a(),
        b: b(),
        c: c()
    }
}