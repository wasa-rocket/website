export default function Modal({
  visible = false,
  setVisible,
  children,
}: {
  visible?: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 ${
        visible ? "" : "hidden"
      }`}
      onClick={() => setVisible(false)}
    >
      <div
        className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
