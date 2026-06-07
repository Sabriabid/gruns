// Tiny global store for the waitlist modal, so any CTA anywhere can open it via
// openWaitlist() without prop-drilling or a context provider. A single
// <WaitlistModal /> (mounted in the root layout) subscribes and renders the popup.

let open = false;
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

export function openWaitlist() {
  open = true;
  emit();
}

export function closeWaitlist() {
  open = false;
  emit();
}

// For useSyncExternalStore.
export function subscribeWaitlist(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getWaitlistOpen() {
  return open;
}
