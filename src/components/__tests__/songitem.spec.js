import AppSongItem from "@/components/AppSongItem.vue";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";

describe('AppSongItem.vue', () => {
    test('song.display_name', () => {
        const song = {
            display_name: 'test',
        };

        const wrapper = shallowMount(AppSongItem, {
            props: {
                song
            },
            global: {
                components: {
                    'router-link': RouterLinkStub
                }
            }
        });

        const compositionAuthor = wrapper.find('.text-gray-500');

        expect(compositionAuthor.text()).toBe(song.display_name);
    });
});