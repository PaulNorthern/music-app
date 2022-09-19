import {shallowMount, RouterLinkStub} from "@vue/test-utils";
import AppSongItem from "@/components/AppSongItem.vue";

describe("Snapshot AppSongItem", () => {
    test("renders correctly", () => {
        const song = {
          docID: "abc",
          modified_name: "test",
          display_name: "test",
          comment_count: 5
        };

        const wrapper = shallowMount(AppSongItem, {
            props: { song },
            global: {
                components: {
                    'router-link' : RouterLinkStub
                }
            }
        });

        expect(wrapper.element).toMatchSnapshot();
    });
});