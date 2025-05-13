export function generateKey():Promise<CryptoKey>{
    return crypto.subtle.generateKey(
        {
            name: "AES-GCM",length:256
        },
        true,
        ["encrypt", "decrypt"]
    );
}

export function generateIv():Uint8Array{
    return  crypto.getRandomValues(new Uint8Array(12));
}

export async function encrypt(text: string, key: CryptoKey, iv: Uint8Array): Promise<ArrayBuffer> {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    return crypto.subtle.encrypt(
        { name: "AES-GCM", iv },
        key,
        data
    );
}

export async function exportKey(key: CryptoKey): Promise<ArrayBuffer> {
    return crypto.subtle.exportKey("raw", key);
}

export async function decrypt(
  cipherTextBase64: string,
  key: CryptoKey,
  ivBase64: string
): Promise<string> {
  const decoder = new TextDecoder();
  const iv = Uint8Array.from(atob(ivBase64), c => c.charCodeAt(0));
  const data = Uint8Array.from(atob(cipherTextBase64), c => c.charCodeAt(0));

  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    key,
    data
  );

  return decoder.decode(decrypted);
}

