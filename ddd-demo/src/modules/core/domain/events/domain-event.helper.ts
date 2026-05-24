import mitt, { type EventHandlerMap } from 'mitt';
import type { EmitDomainEvents } from './domain-event.type';
declare module 'mitt' {
    interface Emitter<Events extends Record<EventType, unknown>> {
        emitAsync<Key extends keyof Events>(
            type: Key,
            event: Events[Key]
        ): Promise<void>;
    }
}
export function mittAsync(all?: EventHandlerMap<EmitDomainEvents>) {
    const instance = mitt<EmitDomainEvents>(all);

    instance.emitAsync = async function (type: keyof EmitDomainEvents, e: any) {
        const handlersType = this.all.get(type);
        // @ts-expect-error Ignore typecheck
        if (handlersType) for (const ht of handlersType) await ht(e);
        const handlersWildcard = this.all.get('*');
        if (handlersWildcard)
            for (const hw of handlersWildcard) await hw(type, e);
    };
    return instance;
}
