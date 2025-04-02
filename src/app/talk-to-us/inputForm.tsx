import { Input } from "@/components/ui/input";
import { LucideIcon } from "lucide-react";
import { ChangeEventHandler } from "react";

export function InputForm({
  name,
  icon: Icon,
  label,
  placeholder,
  blog = false,
  onChange,
  value,
  type = "text", // ✅ Nova prop para definir o tipo de input
  email = false, // ✅ Nova prop para ativar validação de e-mail
}: {
  name: string;
  icon: LucideIcon;
  label: string;
  placeholder: string;
  blog?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  type?: "text" | "password" | "email" | "tel" | "number"; // Tipos suportados
  email?: boolean; // Ativa validação de e-mail
}) {
  // Função de validação de e-mail
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Estado de erro (poderia ser melhorado com useState se quiser feedback visual)
  const isEmailValid = email ? validateEmail(value || "") : true;

  return (
    <div>
      {blog && (
        <label htmlFor={name} className="font-normal text-xs">
          {label}
        </label>
      )}

      {!blog ? (
        <div>
          <label htmlFor={name} className="font-normal text-xs">
            {label}
          </label>
          <div className="flex gap-1 pt-1 group">
            <div className="h-10 w-10 border flex items-center justify-center p-2 rounded-lg group-focus-within:bg-primary-brand-800">
              {Icon && (
                <Icon className="h-6 w-6 text-primary-brand-800 group-focus-within:text-white" />
              )}
            </div>
            <div className="flex-1">
              <Input
                name={name}
                type={type}
                className={`h-10 focus-visible:border-primary-brand-700 group focus-visible:ring-0 ${
                  email && !isEmailValid && value ? "border-red-500" : ""
                }`}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
              />
              {email && !isEmailValid && value && (
                <p className="text-red-500 text-xs mt-1">E-mail inválido</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center border rounded-lg p-0 overflow-hidden group focus-within:border-primary-brand-800 focus-within:ring-1 focus-within:ring-primary-brand-800">
          <div className="h-10 w-10 flex items-center justify-center group-focus-within:bg-primary-brand-800">
            {Icon && (
              <Icon className="h-6 w-6 text-primary-brand-800 group-focus-within:text-white" />
            )}
          </div>
          <div className="flex-1">
            <Input
              name={name}
              type={type}
              className={`h-10 border-0 focus:outline-none focus:ring-0 w-full px-2 focus:ring-offset-0 focus:shadow-none ${
                email && !isEmailValid && value ? "border-red-500" : ""
              }`}
              placeholder={placeholder}
              onChange={onChange}
              value={value}
            />
            {email && !isEmailValid && value && (
              <p className="text-red-500 text-xs mt-1">E-mail inválido</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}