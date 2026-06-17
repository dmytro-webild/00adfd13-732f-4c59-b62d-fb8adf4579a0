"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import TextAnimation from "@/components/text/TextAnimation";
import Button from "@/components/button/Button";
import Input from "@/components/form/Input";
import MediaContent from "@/components/shared/MediaContent";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import { getButtonProps } from "@/lib/buttonUtils";
import type { AnimationType } from "@/components/text/types";
import { sendContactEmail } from "@/utils/sendContactEmail";
import type { InputField } from "./ContactSplitForm";

export interface ContactCtaLink {
    icon: LucideIcon;
    label: string;
    href?: string;
}

interface ContactSplitFormParallaxProps {
    tag: string;
    title: string;
    description: string;
    inputs: InputField[];
    ctaLinks: ContactCtaLink[];
    imageSrc: string;
    imageAlt?: string;
    buttonText?: string;
    useInvertedBackground?: boolean;
    onSubmit?: (data: Record<string, string>) => void;
    ariaLabel?: string;
    className?: string;
}

const ContactSplitFormParallax = ({
    tag,
    title,
    description,
    inputs,
    ctaLinks,
    imageSrc,
    imageAlt = "",
    buttonText = "Submit",
    useInvertedBackground = false,
    onSubmit,
    ariaLabel = "Contact section",
    className = "",
}: ContactSplitFormParallaxProps) => {
    const theme = useTheme();
    const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

    const initialFormData: Record<string, string> = {};
    inputs.forEach((input) => {
        initialFormData[input.name] = "";
    });

    const [formData, setFormData] = useState(initialFormData);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (onSubmit) {
                onSubmit(formData);
            } else {
                await sendContactEmail({ formData });
            }
            setFormData(initialFormData);
        } catch (error) {
            console.error("Failed to send email:", error);
        }
    };

    const getButtonConfigProps = () => {
        if (theme.defaultButtonVariant === "hover-bubble") {
            return { bgClassName: "w-full" };
        }
        if (theme.defaultButtonVariant === "icon-arrow") {
            return { className: "justify-between" };
        }
        return {};
    };

    const mediaContent = (
        <div className="group flex flex-col gap-6 md:h-full">
            <div className="relative overflow-hidden rounded-theme-capped card flex-1 min-h-75">
                <MediaContent
                    imageSrc={imageSrc}
                    imageAlt={imageAlt}
                    imageClassName="w-full h-full md:absolute md:inset-0 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
            </div>

            {ctaLinks.length > 0 && (
                <ul className="flex flex-col gap-3">
                    {ctaLinks.map((link) => {
                        const Icon = link.icon;
                        const content = (
                            <span className="flex items-center gap-3">
                                <span className="card rounded-theme-capped p-2 flex items-center justify-center shrink-0">
                                    <Icon className="w-5 h-5" />
                                </span>
                                <span
                                    className={cls(
                                        "text-base",
                                        shouldUseLightText ? "text-background" : "text-foreground"
                                    )}
                                >
                                    {link.label}
                                </span>
                            </span>
                        );
                        return (
                            <li key={link.label}>
                                {link.href ? (
                                    <a href={link.href} className="hover:opacity-75 transition-opacity">
                                        {content}
                                    </a>
                                ) : (
                                    content
                                )}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );

    const formContent = (
        <div className="card rounded-theme-capped p-6 md:p-10 flex items-center justify-center">
            <form onSubmit={handleSubmit} className="relative z-1 w-full flex flex-col gap-6">
                <div className="w-full flex flex-col gap-3 text-center">
                    {tag && (
                        <span className="card rounded-theme-capped px-3 py-1 text-sm w-fit mx-auto">
                            {tag}
                        </span>
                    )}

                    <TextAnimation
                        type={theme.defaultTextAnimation as AnimationType}
                        text={title}
                        variant="trigger"
                        className={cls(
                            "text-4xl font-medium leading-[1.175] text-balance",
                            shouldUseLightText ? "text-background" : "text-foreground"
                        )}
                    />

                    <TextAnimation
                        type={theme.defaultTextAnimation as AnimationType}
                        text={description}
                        variant="words-trigger"
                        className={cls(
                            "text-base leading-[1.15] text-balance",
                            shouldUseLightText ? "text-background" : "text-foreground"
                        )}
                    />
                </div>

                <div className="w-full flex flex-col gap-4">
                    {inputs.map((input) => (
                        <Input
                            key={input.name}
                            type={input.type}
                            placeholder={input.placeholder}
                            value={formData[input.name] || ""}
                            onChange={(value) => setFormData({ ...formData, [input.name]: value })}
                            required={input.required}
                            ariaLabel={input.placeholder}
                            className={input.className}
                        />
                    ))}

                    <Button
                        {...getButtonProps(
                            { text: buttonText, props: getButtonConfigProps() },
                            0,
                            theme.defaultButtonVariant,
                            "w-full",
                            "text-base"
                        )}
                        type="submit"
                    />
                </div>
            </form>
        </div>
    );

    return (
        <section
            aria-label={ariaLabel}
            className={cls("relative py-20 w-full", useInvertedBackground && "bg-foreground", className)}
        >
            <div className="w-content-width mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:auto-rows-fr">
                    {mediaContent}
                    {formContent}
                </div>
            </div>
        </section>
    );
};

export default ContactSplitFormParallax;
