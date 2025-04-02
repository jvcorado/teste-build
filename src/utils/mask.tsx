export function formatCnpj(cnpj: string): string {
    if (!cnpj) return '';
    
    // Remove todos os caracteres não numéricos
    const formattedCnpj = cnpj.replace(/\D/g, '');
    
    // Aplica a máscara de CNPJ (XX.XXX.XXX/XXXX-XX)
    return formattedCnpj
        .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
        .slice(0, 18); // Tamanho máximo do CNPJ formatado (18 caracteres)
}

export function formatPhone(phone: string): string {
    if (!phone) return '';
    
    // Remove todos os caracteres não numéricos
    const digits = phone.replace(/\D/g, '');
    
    // Formatação para telefone celular (com 9º dígito)
    if (digits.length >= 11) {
        return digits
            .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
            .slice(0, 15); // (99) 99999-9999 (15 caracteres)
    }
    // Formatação para telefone fixo ou celular antigo (sem 9º dígito)
    else if (digits.length >= 10) {
        return digits
            .replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
            .slice(0, 14); // (99) 9999-9999 (14 caracteres)
    }
    // Formatação parcial enquanto o usuário digita
    else if (digits.length > 6) {
        return digits.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    }
    else if (digits.length > 2) {
        return digits.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    }
    else if (digits.length > 0) {
        return digits.replace(/^(\d*)/, '($1');
    }
    
    return digits;
}