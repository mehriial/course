import type { AuthLeftProps } from "../../../types";

function AuthLeft({ title, description, features }: AuthLeftProps) {
    return (
        <>
            <h2 className="text-4xl font-bold my-4 text-txt-200 pr-8">
                {title}
            </h2>

            <p className="text-txt-300 my-6">
                {description}
            </p>

            <ul className="text-txt-100 text-sm space-y-2">
                {features?.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-gr-100 shrink-0" />
                        {feature}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default AuthLeft;