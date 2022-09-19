import {setActivePinia, createPinia} from "pinia";
import useUserStore from "@/stores/user";

// allow mock a dependency
vi.mock("@/includes/firebase", () => ({
    auth: {
        signInWithEmailAndPassword: () => Promise.resolve(),
    }
}));

describe("stores", () => {
    // uniq instance of Pinia beforeEach test
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    test("authenticate user", async () => {
        const store = useUserStore();

        expect(store.userLoggedIn).not.toBe(true);
        await store.authenticate({});
        expect(store.userLoggedIn).toBe(true);
    });
});
