import { For, type Component, Show, splitProps } from 'solid-js';
import { FaSolidCircle, FaRegularCircle } from 'solid-icons/fa';

type Props = {
    count: number;
    total: number;
    color?: string;
};

const Circles: Component<Props> = (props) => {
    const [{ count, total, color }, _other] = splitProps(props, ['count', 'total', 'color']);
    const circles = Array(count)
        .fill(1)
        .concat(Array(total - count).fill(0));
    return (
        <div class="flex gap-1 opacity-70">
            <For each={circles}>
                {(circle) => (
                    <Show when={circle === 1} fallback={<FaRegularCircle />}>
                        <FaSolidCircle color={color ?? 'lightgray'} />
                    </Show>
                )}
            </For>
        </div>
    );
};

export default Circles;
