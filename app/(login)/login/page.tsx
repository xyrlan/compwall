"use client";
import React, { useState, useTransition } from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/icons";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LoginComponent() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [loading, setIsLoading] = useState(false);
  const [transition, startTransition] = useTransition();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();
  const loginUser = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    if (data.username === "" || data.password === "") {
      setError("Preencha todos os campos");
      setIsLoading(false);
      return
    }
    if (data.username === "admin" && data.password === "admin") {
      router.push("/");
      toast.success("Login efetuado com sucesso");
      setIsLoading(false);
    } else {
      toast.error("Credenciais inválidas");
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen relative custom-background">
      <motion.div
        initial={{ x: "50%", y: "70%" }}
        animate={{ x: -400, y: 250 }}
        transition={{ duration: 1 }}
        className="absolute ">
        <Image
          src="/seta-branca.png"
          width={150}
          height={150}
          alt="seta-green"

        />
      </motion.div>
      <motion.div
        initial={{ x: "50%", y: "30%" }}
        animate={{ x: 400, y: -230 }}
        transition={{ duration: 1 }}
        className="absolute ">
        <Image
          src="/seta-green-pra-baixo.png"
          width={150}
          height={150}
          alt="seta-green"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="w-full flex items-center justify-center"
      >
        <Card className="w-full max-w-lg bg-[#273343]  overflow-visible">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Logo className={"py-10 mx-auto"} height={150} width={150} />
          </motion.div>
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="space-y-6" onSubmit={loginUser}>
            <CardBody className="grid gap-4">
              <div className="grid gap-2">
                <Input
                  isRequired
                  autoComplete="username"
                  id="username"
                  label="Username"
                  labelPlacement="inside"
                  type="text"
                  value={data.username}
                  onChange={(e) => {
                    setError("");
                    setData({ ...data, username: e.target.value });
                  }}
                />
              </div>
              <div className="grid gap-2">
                <Input
                  isRequired
                  autoComplete="current-password"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <EyeOff className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <Eye className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  id="password"
                  label="Senha"
                  labelPlacement="inside"
                  type={isVisible ? "text" : "password"}
                  value={data.password}
                  onChange={(e) => {
                    setError("");
                    setData({ ...data, password: e.target.value });
                  }}
                />
              </div>
              {error !== "" && <p className="text-red-500 text-sm mt-2">* {error}</p>}
            </CardBody>
            <CardFooter>
              <Button fullWidth type="submit" isDisabled={loading}>
                {loading ? "Carregando..." : "Entrar"}
              </Button>
            </CardFooter>
          </motion.form>
        </Card>
      </motion.div>
      <style jsx>{`
        .custom-background {
          background: linear-gradient(to bottom left, white 50%, #A8D048 50%);
          clip-path: polygon(0 0, 100% 0, 100% 50%, 0% %);
        }
      `}</style>
    </section>
  );
}
