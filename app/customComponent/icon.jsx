// 'use client'

import React from 'react'
import {
  Compass,
  Camera,
  Cpu,
  Droplet,
  Monitor,
  Wifi,
  Zap,
} from "lucide-react";

/**
 * Simple reusable IconCard for display + accessibility
 * Props:
 *  - Icon: lucide-react component
 *  - title: label shown under icon
 *  - size: numeric px size (default 36)
 */
export default function IconCard({ Icon, title, size = 36 }) {
  return (
    <div
      role="group"
      aria-label={title}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        width: 'max-content',
        padding: 12,
        borderRadius: 12,
        background: "rgba(83, 58, 58, 0)",
      }}
    >
      <Icon size={size} aria-hidden="true" />
      <div style={{ fontSize: 14, textAlign: "center" }}>{title}</div>
    </div>
  );
}
