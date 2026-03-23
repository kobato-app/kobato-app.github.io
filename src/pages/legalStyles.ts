import React from 'react'

export const legalStyles: Record<string, React.CSSProperties> = {
  page: {
    maxWidth: 680,
    margin: '0 auto',
    padding: '48px 24px 80px',
    fontFamily: 'Georgia, "Times New Roman", serif',
    color: '#111',
    lineHeight: 1.8,
    fontSize: 15,
  },
  topbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  back: {
    fontSize: 13,
    color: '#555',
    textDecoration: 'none',
  },
  langSwitch: {
    display: 'flex',
    gap: 0,
    border: '1px solid #ccc',
    borderRadius: 4,
    overflow: 'hidden',
  },
  title: {
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 6,
    fontFamily: 'Georgia, serif',
    color: '#111',
  },
  effective: {
    fontSize: 13,
    color: '#888',
    marginBottom: 40,
    paddingBottom: 24,
    borderBottom: '1px solid #ddd',
  },
  section: {
    marginBottom: 32,
  },
  heading: {
    fontSize: 15,
    fontWeight: 700,
    marginBottom: 8,
    color: '#111',
    fontFamily: 'Georgia, serif',
  },
  body: {
    fontSize: 14,
    color: '#333',
    margin: 0,
    lineHeight: 1.85,
  },
  list: {
    marginTop: 10,
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  listItem: {
    fontSize: 14,
    color: '#333',
    lineHeight: 1.75,
  },
}
