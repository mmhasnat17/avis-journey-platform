type Props = {
  customerName: string;
  biometricEligible: boolean;
  eReceiptEnabled: boolean;
};

export function StatusList({
  customerName,
  biometricEligible,
  eReceiptEnabled,
}: Props) {
  return (
    <section id="biometric" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">Customer profile</h3>
      <div className="mt-4 space-y-3 text-sm text-slate-700">
        <p>
          <span className="font-semibold">Traveler:</span> {customerName}
        </p>
        <p>
          <span className="font-semibold">Biometric readiness:</span>{" "}
          {biometricEligible ? "Eligible" : "Not enabled"}
        </p>
        <p>
          <span className="font-semibold">E-receipt:</span>{" "}
          {eReceiptEnabled ? "Enabled" : "Disabled"}
        </p>
      </div>
    </section>
  );
}
